import { CarouselOptions } from '@components/ui/carousel';
import { AutoplayOptionsType } from 'embla-carousel-autoplay';
type Orientation = 'horizontal' | 'vertical';

export interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  showArrows?: boolean;
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
  orientation?: Orientation;
  carouselClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  imageContainerClassName?: string;
  width?: number;
  height?: number;
  opts?: CarouselOptions;
  autoScrollOptions?: AutoplayOptionsType;
  isInfiniteLoop?: boolean;
  loading?: 'lazy' | 'eager';
}
