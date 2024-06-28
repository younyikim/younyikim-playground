type Orientation = 'horizontal' | 'vertical';

export interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  showArrows?: boolean;
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
  orientation?: Orientation;
  carouselStyle?: string;
  contentStyle?: string;
  itemStyle?: string;
  imageContainerStyle?: string;
  width?: number;
  height?: number;
}
