import { useState, useEffect } from "react";

export const useImagesPreloader = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count += 1;
        if (count === imageUrls.length) setLoaded(true);
      };
      img.onerror = () => {
        count += 1; // evita travar se imagem não carregar
        if (count === imageUrls.length) setLoaded(true);
      };
    });
  }, [imageUrls]);

  return loaded;
};
