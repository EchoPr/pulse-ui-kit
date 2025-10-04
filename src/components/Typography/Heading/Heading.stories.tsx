import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';
import React from 'react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
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
      options: ['white', 'grey', 'danger'],
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
    color: 'grey',
    children: 'Heading Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    color: 'grey',
    children: 'Heading Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    color: 'grey',
    children: 'Heading Level 3',
  },
};

export const WhiteColor: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'White Heading',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const GreyColor: Story = {
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Heading',
  },
};

export const DangerColor: Story = {
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger Heading',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1} color="grey">
        Heading Level 1
      </Heading>
      <Heading level={2} color="grey">
        Heading Level 2
      </Heading>
      <Heading level={3} color="grey">
        Heading Level 3
      </Heading>
    </div>
  ),
};
