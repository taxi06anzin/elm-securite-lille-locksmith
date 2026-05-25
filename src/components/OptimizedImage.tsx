interface OptimizedImageProps {
  /** Source de l'image (chemin importé via Vite ou URL absolue) */
  src: string;
  /** Texte alternatif (accessibilité + SEO) */
  alt: string;
  /** Classes CSS optionnelles (appliquées au <img>) */
  className?: string;
  /** Stratégie de chargement (lazy par défaut, eager pour LCP) */
  loading?: "lazy" | "eager";
  /** Dimensions explicites pour limiter le CLS */
  width?: number;
  height?: number;
  /** Priorité de fetch (auto par défaut, high pour LCP) */
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * Carte de correspondance "URL raster (PNG/JPG) hashée par Vite" -> "URL WebP hashée".
 *
 * Pourquoi un glob plutôt qu'un simple `src.replace('.png', '.webp')` ?
 * Vite hashe les noms de fichiers PAR CONTENU : `intervention-urgence-AbC123.png`
 * et sa version WebP ont des hashes DIFFÉRENTS. Un simple replace produirait une
 * URL inexistante (404). Or un <source> qui 404 ne retombe PAS sur le <img> :
 * l'image serait cassée. On résout donc le WebP au build via import.meta.glob,
 * en associant chaque asset à sa version .webp par nom de base.
 *
 * Les .webp sont générés par `npm run optimize:images`.
 */
const webpUrls = import.meta.glob("../assets/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const rasterUrls = import.meta.glob("../assets/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const rasterToWebp: Record<string, string> = {};
for (const [srcPath, url] of Object.entries(rasterUrls)) {
  const webpPath = srcPath.replace(/\.(png|jpe?g)$/i, ".webp");
  const webpUrl = webpUrls[webpPath];
  if (webpUrl) rasterToWebp[url] = webpUrl;
}

/**
 * Image optimisée : sert le WebP via <picture> avec fallback automatique sur
 * le format original (PNG/JPG) pour les très vieux navigateurs.
 *
 * - Si aucune version WebP n'est connue (ou src déjà .webp/.svg/.gif), rend un
 *   simple <img> — jamais d'image cassée.
 * - Le <picture> est en `display: contents` (classe `contents`) pour rester
 *   neutre vis-à-vis de la mise en page : le <img> conserve son comportement de
 *   dimensionnement vis-à-vis du conteneur parent (ex. h-full).
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  width,
  height,
  fetchPriority,
}: OptimizedImageProps) => {
  const computedFetchPriority =
    fetchPriority || (loading === "eager" ? "high" : "auto");

  const webpSrc = rasterToWebp[src];

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchPriority={computedFetchPriority}
    />
  );

  if (!webpSrc) {
    return img;
  }

  return (
    <picture className="contents">
      <source srcSet={webpSrc} type="image/webp" />
      {img}
    </picture>
  );
};

export default OptimizedImage;
