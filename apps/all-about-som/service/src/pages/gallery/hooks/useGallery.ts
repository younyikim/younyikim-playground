import { Images } from '@utils/image';
import { useCallback } from 'react';

const useGallery = () => {
  const imagesTop = [
    { src: Images.bori, alt: 'Image 1' },
    { src: Images.tori, alt: 'Image 2' },
    { src: Images.latte, alt: 'Image 3' },
    { src: Images.jjeko, alt: 'Image 4' },
    { src: Images.zio, alt: 'Image 5' },
  ];

  const imagesBottom = [
    { src: Images.bori, alt: 'Image 1' },
    { src: Images.tori, alt: 'Image 2' },
    { src: Images.latte, alt: 'Image 3' },
    { src: Images.jjeko, alt: 'Image 4' },
    { src: Images.zio, alt: 'Image 5' },
  ];

  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.classList.add('animate-scroll-in-left');
      } else {
        target.classList.remove('animate-scroll-in-left');
      }
    },
    [],
  );

  return { imagesTop, imagesBottom, intersectionCallback };
};

export default useGallery;
