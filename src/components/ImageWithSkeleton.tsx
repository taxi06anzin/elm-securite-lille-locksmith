import { useState } from "react";

interface Props {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}

/**
 * Image avec skeleton anti-CLS : réserve la hauteur via `aspect-ratio` pendant
 * le chargement, puis fond l'image en place.
 *
 * ⚠️ À NE PAS utiliser pour l'image LCP du hero : le fade-in `opacity-0 → 100`
 * retarde le Largest Contentful Paint. Réservé aux images non-LCP.
 */
const ImageWithSkeleton = ({
  src,
  webpSrc,
  alt,
  className = "",
  width,
  height,
  priority = false,
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted motion-safe:animate-pulse" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>
    </div>
  );
};

export default ImageWithSkeleton;
