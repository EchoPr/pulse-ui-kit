import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import Menu from '../Menu/Menu/Menu';
import MenuItem from '../Menu/MenuItem/MenuItem';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    text: 'Меню',
    children: (
      <Menu>
        <MenuItem onClick={() => console.log('Пункт 1')}>Пункт 1</MenuItem>
        <MenuItem onClick={() => console.log('Пункт 2')}>Пункт 2</MenuItem>
      </Menu>
    ),
  },
};

export const WithThreeItems: Story = {
  args: {
    text: 'Настройки',
    children: (
      <Menu>
        <MenuItem onClick={() => console.log('Профиль')}>Профиль</MenuItem>
        <MenuItem onClick={() => console.log('Настройки')}>Настройки</MenuItem>
        <MenuItem onClick={() => console.log('Выход')}>Выход</MenuItem>
      </Menu>
    ),
  },
};
