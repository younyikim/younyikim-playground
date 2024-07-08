import { ForwardedRef, forwardRef } from 'react';
import { ImageCarousel } from '@younyikim/ui';

// Hooks
import useGallery from '@pages/gallery/hooks/useGallery';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    imagesTop,
    imagesBottom,
    isInfiniteLoop,
    intersectionCallback,
    intersectionCarouselCallback,
  } = useGallery();

  useIntersectionObserver(intersectionCallback, 'observe-gallery');
  useIntersectionObserver(intersectionCarouselCallback, 'observe-carousel', {
    rootMargin: '0% 0% 50% 0%',
  });

  return (
    <section
      ref={ref}
      className="observe-carousel bg-coral flex h-screen w-full flex-col items-center justify-between overflow-hidden py-16"
    >
      <ImageCarousel
        images={imagesTop}
        carouselClassName="max-w-full"
        itemClassName="px-4 max-w-[20rem]"
        autoScrollOptions={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          speed: 1,
        }}
        imageContainerClassName={'h-[23rem]'}
        isInfiniteLoop={isInfiniteLoop}
      />
      <h3 className="font-gulf observe-gallery text-6xl text-white">GALLERY</h3>
      <ImageCarousel
        images={imagesBottom}
        carouselClassName="max-w-full"
        itemClassName="px-4 max-w-[20rem]"
        autoScrollOptions={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          speed: 1,
        }}
        imageContainerClassName={'h-[23rem]'}
        isInfiniteLoop={isInfiniteLoop}
      />
    </section>
  );
});

export default index;
