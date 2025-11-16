interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy" 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
};

export default OptimizedImage;
