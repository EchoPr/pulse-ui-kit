import type { Meta, StoryObj } from '@storybook/react';
import Body from './Body';
import React from 'react';

const meta: Meta<typeof Body> = {
  title: 'Typography/Body',
  component: Body,
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
      description: 'Body text level (size)',
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'grey', 'danger'],
      description: 'Text color',
    },
    children: {
      control: { type: 'text' },
      description: 'Body text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    level: 1,
    color: 'grey',
    children:
      'This is body text level 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    color: 'grey',
    children:
      'This is body text level 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    color: 'grey',
    children:
      'This is body text level 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const WhiteColor: Story = {
  args: {
    level: 1,
    color: 'white',
    children: 'White body text for dark backgrounds.',
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
    children: 'Grey body text for light backgrounds.',
  },
};

export const DangerColor: Story = {
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger body text for errors and warnings.',
  },
};

export const AllLevels: Story = {
  args: {
    color: 'grey',
  },

  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px',
      }}
    >
      <Body level={1} color="grey">
        Body Level 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Body level={2} color="grey">
        Body Level 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Body>
      <Body level={3} color="grey">
        Body Level 3: Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </Body>
    </div>
  ),
};
