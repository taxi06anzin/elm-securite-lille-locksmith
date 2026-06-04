/**
 * Recompression des PNG de secours (<picture> fallback) trop lourds.
 *
 * Les navigateurs modernes reçoivent le WebP via OptimizedImage ; le PNG n'est
 * qu'un fallback. Inutile d'embarquer des PNG de 2 Mo : on les redimensionne
 * (max 1280px) et on les recompresse (palette) pour alléger le build.
 *
 * Usage : node scripts/shrink-png-fallbacks.mjs
 * Idempotent : ne retouche que les PNG au-dessus du seuil.
 */
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "..", "src/assets");
const MAX_WIDTH = 1280;
const THRESHOLD = 500 * 1024; // 500 KB

let saved = 0;
for (const file of readdirSync(ASSETS)) {
  if (!file.toLowerCase().endsWith(".png")) continue;
  const filePath = join(ASSETS, file);
  const before = statSync(filePath).size;
  if (before < THRESHOLD) continue;

  const buffer = await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 80, palette: true, effort: 10 })
    .toBuffer();

  if (buffer.length < before) {
    writeFileSync(filePath, buffer);
    const after = statSync(filePath).size;
    saved += before - after;
    console.log(
      `${file}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`,
    );
  }
}
console.log(`\nTotal économisé : ${Math.round(saved / 1024)} KB`);
