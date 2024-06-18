import { Images } from '@utils/image';
import { useEffect, useState } from 'react';

const useLanding = () => {
  const [currentImage, setCurrentImage] = useState(Images.landing2);

  useEffect(() => {
    const images = [Images.landing1, Images.landing2];
    let currentIndex = 0;

    // 3초에 한 번 이미지를 변경
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { currentImage };
};

export default useLanding;
