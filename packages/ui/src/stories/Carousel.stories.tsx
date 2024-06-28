import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

// Component
import { Carousel } from '@components/ui/carousel';
import ImageCarousel from '@components/carousel/ImageCarousel';

// Alert 컴포넌트의 Prop 타입 정의
interface CarouselProps {
  children: React.ReactNode;
}

const meta: Meta<React.FC<CarouselProps>> = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<React.FC<CarouselProps>>;

const images = [
  { src: 'https://via.placeholder.com/600x800?text=Image+1', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/600x800?text=Image+2', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/600x800?text=Image+3', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/600x800?text=Image+4', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/600x800?text=Image+5', alt: 'Image 5' },
];

export const ImageSliderCarousel: Story = {
  render: () => <ImageCarousel images={images} />,
};
