import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

// Component
import { Switch } from '@components/ui/switch';
import { Label } from '@components/ui/label';

// Alert 컴포넌트의 Prop 타입 정의
interface SwitchProps {
  children: React.ReactNode;
}

const meta: Meta<React.FC<SwitchProps>> = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<React.FC<SwitchProps>>;

export const Basic: Story = {
  render: () => <Switch />,
};

export const SwitchWithIcon: Story = {
  render: () => (
    <Switch
      src={
        'https://fonts.gstatic.com/s/i/materialicons/check_circle/v15/24px.svg'
      }
    />
  ),
};

export const SwitchWithTag: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch />
      <Label htmlFor="airplane-mode">Switch Tag</Label>
    </div>
  ),
};
