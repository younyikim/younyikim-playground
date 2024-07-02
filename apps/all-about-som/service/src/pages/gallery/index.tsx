import { ForwardedRef, forwardRef } from 'react';
import { ImageCarousel } from '@younyikim/ui';

// Hooks
import useGallery from '@pages/gallery/hooks/useGallery';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { imagesTop, imagesBottom, intersectionCallback } = useGallery();

  useIntersectionObserver(intersectionCallback, 'observe-gallery');

  return (
    <section
      ref={ref}
      className="bg-coral flex h-screen w-full flex-col items-center justify-between overflow-hidden py-16"
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
      />
    </section>
  );
});

export default index;
