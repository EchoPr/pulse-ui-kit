import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';
import React from 'react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
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
      description: 'Heading level (size)',
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'grey'],
      description: 'Text color',
    },
    children: {
      control: { type: 'text' },
      description: 'Heading text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'Heading Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    color: 'white',
    children: 'Heading Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    color: 'white',
    children: 'Heading Level 3',
  },
};

export const WhiteColor: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'White Heading',
  },
};

export const GreyColor: Story = {
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Heading',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1} color="white">
        Heading Level 1
      </Heading>
      <Heading level={2} color="white">
        Heading Level 2
      </Heading>
      <Heading level={3} color="white">
        Heading Level 3
      </Heading>
    </div>
  ),
};
