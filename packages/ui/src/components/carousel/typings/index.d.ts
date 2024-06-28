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
}
