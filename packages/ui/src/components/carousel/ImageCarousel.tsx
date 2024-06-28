import * as React from 'react';

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
    width = '100%',
    height = 'auto',
    ...rest
  } = props;

  return (
    <Carousel className={`w-full max-w-sm ${carouselClassName}`} {...rest}>
      <CarouselContent className={`-ml-1 ${contentClassName}`}>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={`pl-1 md:basis-1/2 lg:basis-1/3 ${itemClassName}`}
          >
            <div
              className={`overflow-hidden rounded-3xl border border-white ${imageContainerClassName}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover"
                width={width}
                height={height}
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
