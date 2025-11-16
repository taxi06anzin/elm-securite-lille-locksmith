interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  width,
  height
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchPriority={loading === "eager" ? "high" : "auto"}
    />
  );
};

export default OptimizedImage;
