import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu/Menu';
import MenuItem from './MenuItem/MenuItem';

const meta: Meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuItem onClick={() => console.log('Profile clicked')}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => console.log('Settings clicked')}>
        Settings
      </MenuItem>
      <MenuItem onClick={() => console.log('Logout clicked')}>Logout</MenuItem>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuItem onClick={() => console.log('Edit clicked')}>✏️ Edit</MenuItem>
      <MenuItem onClick={() => console.log('Delete clicked')}>
        🗑️ Delete
      </MenuItem>
      <MenuItem onClick={() => console.log('Share clicked')}>🔗 Share</MenuItem>
    </Menu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Menu>
      <MenuItem onClick={() => console.log('Active item')}>
        Active Item
      </MenuItem>
      <MenuItem>Disabled Item</MenuItem>
      <MenuItem onClick={() => console.log('Another active')}>
        Another Active
      </MenuItem>
    </Menu>
  ),
};
