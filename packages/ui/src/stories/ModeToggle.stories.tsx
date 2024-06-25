import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

// Component
import { ModeToggle } from '@components/mode-toggle';

interface ModeToggleProps {
  children: React.ReactNode;
}

const meta: Meta<React.FC<ModeToggleProps>> = {
  title: 'Example/ModeToggle',
  component: ModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<React.FC<ModeToggleProps>>;

export const Basic: Story = {
  render: () => <ModeToggle />,
};
