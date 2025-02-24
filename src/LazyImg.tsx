import { useEffect, useRef, useState } from "react";

interface ImgProps {
  src: string;
  alt: string;
}

const LazyImg: React.FC<ImgProps> = ({ src, alt }) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.disconnect;
        }
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={showImage ? src : undefined} // Here instead of undefined we can pass a temp img to show
      alt={alt}
      className="w-36 h-36"
    />
  );
};

export default LazyImg;
