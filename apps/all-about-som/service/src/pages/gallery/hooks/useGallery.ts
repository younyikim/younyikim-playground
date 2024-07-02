import { Images } from '@utils/image';
import { useCallback } from 'react';

const useGallery = () => {
  const imagesTop = [
    { src: Images.image01, alt: 'Image 1' },
    { src: Images.image02, alt: 'Image 2' },
    { src: Images.image03, alt: 'Image 3' },
    { src: Images.image04, alt: 'Image 4' },
    { src: Images.image05, alt: 'Image 5' },
  ];

  const imagesBottom = [
    { src: Images.image06, alt: 'Image 1' },
    { src: Images.image07, alt: 'Image 2' },
    { src: Images.image08, alt: 'Image 3' },
    { src: Images.image09, alt: 'Image 4' },
    { src: Images.image10, alt: 'Image 5' },
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
