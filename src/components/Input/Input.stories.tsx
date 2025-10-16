import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';
import React from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Обертка для контролируемого инпута
const InputWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return <Input {...args} value={value} onChange={setValue} />;
};

// Базовая история
export const Default: Story = {
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Введите текст...',
  },
};

// Пароль
export const Password: Story = {
  render: args => <InputWithState {...args} />,
  args: {
    type: 'password',
    placeholder: 'Введите пароль...',
  },
};

// Email
export const Email: Story = {
  render: args => <InputWithState {...args} />,
  args: {
    type: 'email',
    placeholder: 'example@mail.com',
  },
};

// Отключенное поле
export const Disabled: Story = {
  args: {
    value: 'Неактивное поле',
    disabled: true,
  },
};

// С иконкой перед полем
export const WithBeforeAction: Story = {
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Поиск...',
    beforeAction: <span style={{ color: '#666', padding: '0 4px' }}>🔍</span>,
  },
};

// С иконкой после поля
export const WithAfterAction: Story = {
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Введите сумму...',
    afterAction: <span style={{ color: '#666', padding: '0 4px' }}>₽</span>,
  },
};
