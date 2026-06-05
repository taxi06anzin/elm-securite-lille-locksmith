/**
 * Normalise les URLs canonical / og:url / twitter:url + le sitemap vers la
 * forme AVEC slash final, pour correspondre à l'URL réellement servie par
 * Netlify (react-snap génère `route/index.html` → Netlify sert `/route/`).
 *
 * Ne touche QUE les attributs canonical/og:url/twitter:url et les <loc> du
 * sitemap. N'ajoute pas de slash à la racine (qui en a déjà un), ni aux URLs
 * avec extension de fichier (ex: og-image.jpg) ou query string.
 *
 * Usage : node scripts/normalize-trailing-slash.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const DOMAIN = "https://serrurier-urgence-lille.fr";

const addSlash = (url) => {
  // déjà un slash final, ou query/ancre, ou fichier (extension) → on ne touche pas
  if (url.endsWith("/")) return url;
  const path = url.slice(DOMAIN.length); // commence par "/..."
  if (path === "" ) return url; // racine sans slash (ne devrait pas arriver)
  if (/[?#]/.test(path)) return url;
  const last = path.split("/").pop();
  if (last.includes(".")) return url; // ressemble à un fichier
  return url + "/";
};

// 1) Pages TSX : canonical + og:url + twitter:url
const PAGES = join(ROOT, "src/pages");
const attrRe = new RegExp(
  `((?:rel="canonical" href|property="og:url" content|name="twitter:url" content)=")(${DOMAIN}[^"]*)(")`,
  "g",
);
let pagesChanged = 0;
for (const f of readdirSync(PAGES)) {
  if (!f.endsWith(".tsx")) continue;
  const p = join(PAGES, f);
  const before = readFileSync(p, "utf8");
  const after = before.replace(attrRe, (m, pre, url, post) => pre + addSlash(url) + post);
  if (after !== before) {
    writeFileSync(p, after);
    pagesChanged++;
    console.log("  page:", f);
  }
}

// 2) sitemap.xml : <loc>
const SITEMAP = join(ROOT, "public/sitemap.xml");
const sBefore = readFileSync(SITEMAP, "utf8");
const sAfter = sBefore.replace(
  new RegExp(`(<loc>)(${DOMAIN}[^<]*)(</loc>)`, "g"),
  (m, a, url, c) => a + addSlash(url) + c,
);
if (sAfter !== sBefore) {
  writeFileSync(SITEMAP, sAfter);
  console.log("  sitemap.xml mis à jour");
}

console.log(`\nPages modifiées : ${pagesChanged}`);
