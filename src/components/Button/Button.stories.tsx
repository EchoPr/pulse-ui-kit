import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Label from '../Typography/Label/Label';
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
      description: 'Button content (use Typography components)',
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
    children: (
      <Label level={3} color="white">
        Button
      </Label>
    ),
  },
};

// Primary variants
export const PrimaryDefault: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: (
      <Label level={3} color="white">
        Primary Default
      </Label>
    ),
  },
};

export const PrimaryDanger: Story = {
  args: {
    variant: 'danger',
    style: 'primary',
    size: 'normal',
    children: (
      <Label level={3} color="white">
        Primary Danger
      </Label>
    ),
  },
};

// Secondary variants
export const SecondaryDefault: Story = {
  args: {
    variant: 'default',
    style: 'secondary',
    size: 'normal',
    children: (
      <Label level={3} color="grey">
        Secondary Default
      </Label>
    ),
  },
};

export const SecondaryDanger: Story = {
  args: {
    variant: 'danger',
    style: 'secondary',
    size: 'normal',
    children: (
      <Label level={3} color="danger">
        Secondary Danger
      </Label>
    ),
  },
};

// On-danger variants
export const OnDangerDefault: Story = {
  args: {
    variant: 'default',
    style: 'on-danger',
    size: 'normal',
    children: (
      <Label level={3} color="grey">
        On Danger Default
      </Label>
    ),
  },
};

export const OnDangerDanger: Story = {
  args: {
    variant: 'danger',
    style: 'on-danger',
    size: 'normal',
    children: (
      <Label level={3} color="grey">
        On Danger Danger
      </Label>
    ),
  },
};

// On-default variants
export const OnDefaultDefault: Story = {
  args: {
    variant: 'default',
    style: 'on-default',
    size: 'normal',
    children: (
      <Label level={3} color="grey">
        On Default Default
      </Label>
    ),
  },
};

export const OnDefaultDanger: Story = {
  args: {
    variant: 'danger',
    style: 'on-default',
    size: 'normal',
    children: (
      <Label level={3} color="grey">
        On Default Danger
      </Label>
    ),
  },
};

// Size variants
export const SmallButton: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'small',
    children: (
      <Label level={3} color="white">
        Small Button
      </Label>
    ),
  },
};

export const NormalButton: Story = {
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: (
      <Label level={3} color="white">
        Normal Button
      </Label>
    ),
  },
};

// All combinations showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Primary:</h3>
        <Button variant="default" style="primary" size="normal">
          <Label level={3} color="white">
            Normal
          </Label>
        </Button>
        <Button variant="default" style="primary" size="small">
          <Label level={3} color="white">
            Small
          </Label>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Secondary:</h3>
        <Button variant="default" style="secondary" size="normal">
          <Label level={3} color="grey">
            Normal
          </Label>
        </Button>
        <Button variant="default" style="secondary" size="small">
          <Label level={3} color="grey">
            Small
          </Label>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Primary:</h3>
        <Button variant="danger" style="primary" size="normal">
          <Label level={3} color="white">
            Normal
          </Label>
        </Button>
        <Button variant="danger" style="primary" size="small">
          <Label level={3} color="white">
            Small
          </Label>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Secondary:</h3>
        <Button variant="danger" style="secondary" size="normal">
          <Label level={3} color="grey">
            Normal
          </Label>
        </Button>
        <Button variant="danger" style="secondary" size="small">
          <Label level={3} color="grey">
            Small
          </Label>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>On-Danger:</h3>
        <Button variant="default" style="on-danger" size="normal">
          <Label level={3} color="grey">
            Default Normal
          </Label>
        </Button>
        <Button variant="default" style="on-danger" size="small">
          <Label level={3} color="grey">
            Default Small
          </Label>
        </Button>
        <Button variant="danger" style="on-danger" size="normal">
          <Label level={3} color="grey">
            Danger Normal
          </Label>
        </Button>
        <Button variant="danger" style="on-danger" size="small">
          <Label level={3} color="grey">
            Danger Small
          </Label>
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>On-Default:</h3>
        <Button variant="default" style="on-default" size="normal">
          <Label level={3} color="grey">
            Default Normal
          </Label>
        </Button>
        <Button variant="default" style="on-default" size="small">
          <Label level={3} color="grey">
            Default Small
          </Label>
        </Button>
        <Button variant="danger" style="on-default" size="normal">
          <Label level={3} color="grey">
            Danger Normal
          </Label>
        </Button>
        <Button variant="danger" style="on-default" size="small">
          <Label level={3} color="grey">
            Danger Small
          </Label>
        </Button>
      </div>
    </div>
  ),
};
