import { useEffect, useState } from 'react';

// Utils
import { Images } from '@utils/image';

const useLanding = () => {
  const [currentImage, setCurrentImage] = useState(Images.landing1);

  useEffect(() => {
    const images = [Images.landing1, Images.landing2];
    let currentIndex = 1;

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
