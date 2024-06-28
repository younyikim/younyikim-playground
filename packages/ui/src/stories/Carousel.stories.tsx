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

export const ImageSliderCarousel: Story = {
  render: () => <ImageCarousel />,
};
