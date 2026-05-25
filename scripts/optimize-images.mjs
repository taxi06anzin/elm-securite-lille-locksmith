/**
 * Script de conversion des images en WebP + génération de l'og-image.
 *
 * Usage : npm run optimize:images
 *
 * Stratégie :
 * - Chaque image source dans src/assets/ est convertie en .webp à côté
 *   (l'original PNG/JPG est CONSERVÉ pour le fallback <picture>)
 * - Resize intelligent : largeur max = 1600px pour éviter les images surdimensionnées
 * - Qualité WebP = 80 (sweet spot qualité/poids)
 * - Génération de public/og-image.jpg à partir de hero-locksmith.jpg (1200×630)
 *
 * Ce script peut être ré-exécuté de manière idempotente :
 * il écrase les .webp existants mais ne touche pas aux PNG/JPG sources.
 */

import sharp from "sharp";
import { readdirSync, statSync, existsSync, mkdirSync } from "node:fs";
import { join, parse, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS_DIR = join(ROOT, "src/assets");
const PUBLIC_DIR = join(ROOT, "public");

// Configuration
const MAX_WIDTH = 1600; // px
const WEBP_QUALITY = 80; // %
const SUPPORTED_INPUTS = [".png", ".jpg", ".jpeg"];

// Compteurs pour le rapport
let totalSavedKB = 0;
let convertedCount = 0;
let skippedCount = 0;

/**
 * Convertit une image en WebP à côté du fichier source.
 * Retourne { savedKB, originalKB, newKB } ou null si déjà à jour / erreur.
 */
async function convertToWebp(srcPath) {
  const parsed = parse(srcPath);
  const webpPath = join(parsed.dir, `${parsed.name}.webp`);
  const originalSize = statSync(srcPath).size;
  const originalKB = Math.round(originalSize / 1024);

  try {
    const metadata = await sharp(srcPath).metadata();
    const targetWidth = metadata.width > MAX_WIDTH ? MAX_WIDTH : metadata.width;

    await sharp(srcPath)
      .resize({
        width: targetWidth,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const newSize = statSync(webpPath).size;
    const newKB = Math.round(newSize / 1024);
    const savedKB = originalKB - newKB;
    const savedPct = Math.round((savedKB / originalKB) * 100);

    console.log(
      `  ✅ ${parsed.base} → ${parsed.name}.webp  (${originalKB} KB → ${newKB} KB, -${savedPct}%)`
    );

    totalSavedKB += savedKB;
    convertedCount++;
    return { savedKB, originalKB, newKB };
  } catch (err) {
    console.error(`  ❌ ${parsed.base} : ${err.message}`);
    return null;
  }
}

/**
 * Génère public/og-image.jpg à partir d'une image source.
 * Format Open Graph standard : 1200×630, JPG qualité 85.
 */
async function generateOgImage() {
  const sourceImage = join(ASSETS_DIR, "hero-locksmith.jpg");
  const ogImagePath = join(PUBLIC_DIR, "og-image.jpg");

  if (!existsSync(sourceImage)) {
    console.error(
      `  ❌ Source ${sourceImage} introuvable pour générer og-image.jpg`
    );
    return;
  }

  try {
    await sharp(sourceImage)
      .resize({
        width: 1200,
        height: 630,
        fit: "cover",
        position: "center",
      })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(ogImagePath);

    const size = statSync(ogImagePath).size;
    const sizeKB = Math.round(size / 1024);
    console.log(`  ✅ Generated og-image.jpg (1200×630, ${sizeKB} KB)`);
  } catch (err) {
    console.error(`  ❌ og-image.jpg : ${err.message}`);
  }
}

/**
 * Main
 */
async function main() {
  console.log("\n🖼️  Optimisation des images ELM Sécurité\n");
  console.log(`📁 Dossier source : ${ASSETS_DIR}`);
  console.log(`⚙️  Config : max-width ${MAX_WIDTH}px, WebP quality ${WEBP_QUALITY}%\n`);

  if (!existsSync(ASSETS_DIR)) {
    console.error(`❌ Dossier ${ASSETS_DIR} introuvable. Abort.`);
    process.exit(1);
  }

  // 1. Conversion des images src/assets/
  console.log("── Conversion WebP ──");
  const files = readdirSync(ASSETS_DIR);
  for (const file of files) {
    const fullPath = join(ASSETS_DIR, file);
    const ext = parse(file).ext.toLowerCase();
    if (!SUPPORTED_INPUTS.includes(ext)) {
      if (ext !== ".webp") skippedCount++;
      continue;
    }
    await convertToWebp(fullPath);
  }

  // 2. Génération de l'og-image
  console.log("\n── Génération og-image ──");
  await generateOgImage();

  // 3. Rapport final
  console.log("\n── Résumé ──");
  console.log(`✅ Images converties      : ${convertedCount}`);
  console.log(`⏭️  Images ignorées        : ${skippedCount} (déjà .webp ou format non supporté)`);
  console.log(`💾 Économies totales      : ${totalSavedKB} KB (${(totalSavedKB / 1024).toFixed(1)} MB)`);
  console.log("\n🎉 Optimisation terminée.\n");
}

main().catch((err) => {
  console.error("\n❌ Erreur fatale :", err);
  process.exit(1);
});
