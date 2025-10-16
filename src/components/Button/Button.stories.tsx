import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'danger'],
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'on-danger', 'on-default'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'normal'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Button',
  },
};

// Primary variants
export const PrimaryDefault: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Primary Default',
  },
};

export const PrimaryDanger: Story = {
  args: {
    variant: 'danger',
    style: 'primary',
    size: 'normal',
    children: 'Primary Danger',
  },
};

// Secondary variants
export const SecondaryDefault: Story = {
  args: {
    variant: 'default',
    style: 'secondary',
    size: 'normal',
    children: 'Secondary Default',
  },
};

export const SecondaryDanger: Story = {
  args: {
    variant: 'danger',
    style: 'secondary',
    size: 'normal',
    children: 'Secondary Danger',
  },
};

// On-danger variant (только для default)
export const OnDanger: Story = {
  args: {
    variant: 'default',
    style: 'on-danger',
    size: 'normal',
    children: 'On Danger',
  },
};

// On-default variant (только для default)
export const OnDefault: Story = {
  args: {
    variant: 'default',
    style: 'on-default',
    size: 'normal',
    children: 'On Default',
  },
};

// Size variants
export const SmallButton: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const NormalButton: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Normal Button',
  },
};

// All combinations showcase - только допустимые комбинации
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Primary:</h3>
        <Button variant="default" style="primary" size="normal">
          Normal
        </Button>
        <Button variant="default" style="primary" size="small">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Secondary:</h3>
        <Button variant="default" style="secondary" size="normal">
          Normal
        </Button>
        <Button variant="default" style="secondary" size="small">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default On-Danger:</h3>
        <Button variant="default" style="on-danger" size="normal">
          Normal
        </Button>
        <Button variant="default" style="on-danger" size="small">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default On-Default:</h3>
        <Button variant="default" style="on-default" size="normal">
          Normal
        </Button>
        <Button variant="default" style="on-default" size="small">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Primary:</h3>
        <Button variant="danger" style="primary" size="normal">
          Normal
        </Button>
        <Button variant="danger" style="primary" size="small">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Secondary:</h3>
        <Button variant="danger" style="secondary" size="normal">
          Normal
        </Button>
        <Button variant="danger" style="secondary" size="small">
          Small
        </Button>
      </div>
    </div>
  ),
};
