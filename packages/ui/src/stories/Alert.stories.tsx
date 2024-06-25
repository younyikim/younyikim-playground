import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

// Component
import { Alert, AlertTitle, AlertDescription } from '@/components/alert';

// Alert 컴포넌트의 Prop 타입 정의
interface AlertProps {
  children: React.ReactNode;
}

const meta: Meta<React.FC<AlertProps>> = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<React.FC<AlertProps>>;

export const Basic: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};
