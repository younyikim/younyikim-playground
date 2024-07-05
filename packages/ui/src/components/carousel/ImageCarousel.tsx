import React, { useCallback } from 'react';
import AutoScroll from 'embla-carousel-autoplay';

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from '@components/ui/carousel';

// Typings
import { ImageCarouselProps } from '@components/carousel/typings';

const ImageCarousel = (props: ImageCarouselProps) => {
  const {
    images,
    showArrows = false,
    carouselClassName = '',
    contentClassName = '',
    itemClassName = '',
    imageContainerClassName = '',
    opts = { loop: true },
    autoScrollOptions = { playOnInit: false, speed: 1 },
    isInfiniteLoop = true,
    loading = 'lazy',
    ...rest
  } = props;

  /**
   * isInfiniteLoop 플래그에 따라 자동으로 캐러셀 자동 스크롤을 시작하거나 멈추는 함수
   * @param {CarouselApi} api 캐러셀 컴포넌트에서 제공하는 API 객체
   */
  const autoPlay = useCallback(
    (api: CarouselApi) => {
      const autoScroll = api?.plugins()?.autoplay;

      if (!autoScroll) return;

      if (isInfiniteLoop) {
        autoScroll.play();
      } else {
        autoScroll.stop();
      }
    },
    [isInfiniteLoop],
  );

  return (
    <Carousel
      className={`test w-full max-w-sm ${carouselClassName}`}
      plugins={[AutoScroll(autoScrollOptions)]}
      opts={opts}
      setApi={autoPlay}
      {...rest}
    >
      <CarouselContent className={`-ml-1 ${contentClassName}`}>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={`pl-1 md:basis-1/2 lg:basis-1/3 ${itemClassName}`}
          >
            <div
              className={`overflow-hidden rounded-3xl border border-white ${imageContainerClassName} h-[300px]`}
            >
              <img
                src={image.src}
                loading={loading}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default ImageCarousel;
