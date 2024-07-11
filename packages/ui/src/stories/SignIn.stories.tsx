import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

// Component
import { SignInForm } from '@components/form';

// SignInForm 컴포넌트의 Prop 타입 정의
interface SignInProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const meta: Meta<React.FC<SignInProps>> = {
  title: 'Example/SignIn',
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<React.FC<SignInProps>>;

export const SignInFormComponent: Story = {
  render: () => (
    <SignInForm
      onSubmit={() => {
        console.log('onSubmit');
      }}
    />
  ),
};
