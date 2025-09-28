import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import React from 'react';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Label level (size)',
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'grey'],
      description: 'Text color',
    },
    children: {
      control: { type: 'text' },
      description: 'Label text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'Label Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    color: 'white',
    children: 'Label Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    color: 'white',
    children: 'Label Level 3',
  },
};

export const WhiteColor: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'White Label',
  },
};

export const GreyColor: Story = {
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Label',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const FormLabels: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
      }}
    >
      <div>
        <Label level={1} color="white">
          Email Address
        </Label>
        <input
          type="email"
          style={{
            marginTop: '4px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <Label level={2} color="white">
          Password
        </Label>
        <input
          type="password"
          style={{
            marginTop: '4px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <Label level={3} color="white">
          Confirm Password
        </Label>
        <input
          type="password"
          style={{
            marginTop: '4px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Confirm your password"
        />
      </div>
    </div>
  ),
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Label level={1} color="white">
        Label Level 1
      </Label>
      <Label level={2} color="white">
        Label Level 2
      </Label>
      <Label level={3} color="white">
        Label Level 3
      </Label>
    </div>
  ),
};
