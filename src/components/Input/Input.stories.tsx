import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Введите текст...',
  type: 'text',
  onChange: action('onChange'),
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Предзаполненный текст',
  placeholder: 'Введите текст...',
  type: 'text',
  onChange: action('onChange'),
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Введите пароль...',
  onChange: action('onChange'),
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'email@example.com',
  onChange: action('onChange'),
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  placeholder: 'Введите число',
  onChange: action('onChange'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Отключенное поле',
  disabled: true,
};

export const WithBeforeAction = Template.bind({});
WithBeforeAction.args = {
  placeholder: 'Поиск...',
  beforeAction: <span style={{ color: '#666', padding: '0 8px' }}>🔍</span>,
  onChange: action('onChange'),
};

export const WithAfterAction = Template.bind({});
WithAfterAction.args = {
  placeholder: 'Введите сумму',
  afterAction: (
    <span style={{ color: '#666', padding: '0 8px', fontSize: '14px' }}>₽</span>
  ),
  onChange: action('onChange'),
};

export const WithBothActions = Template.bind({});
WithBothActions.args = {
  placeholder: 'Введите URL',
  beforeAction: (
    <span style={{ color: '#666', padding: '0 8px', fontSize: '14px' }}>
      https://
    </span>
  ),
  afterAction: (
    <span style={{ color: '#666', padding: '0 8px', fontSize: '14px' }}>
      .com
    </span>
  ),
  onChange: action('onChange'),
};

// Демонстрация всех состояний в одной стори
export const AllStates = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '300px',
    }}
  >
    <Input placeholder="Обычное поле" onChange={action('onChange')} />
    <Input value="С предзаполненным текстом" onChange={action('onChange')} />
    <Input placeholder="Отключенное поле" disabled />
    <Input
      placeholder="С иконкой поиска"
      beforeAction={<span>🔍</span>}
      onChange={action('onChange')}
    />
    <Input
      placeholder="С валютой"
      afterAction={<span>₽</span>}
      onChange={action('onChange')}
    />
    <Input type="password" placeholder="Пароль" onChange={action('onChange')} />
  </div>
);

AllStates.storyName = 'All States';

// Демонстрация разных типов инпутов
export const InputTypes = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '300px',
    }}
  >
    <Input
      type="text"
      placeholder="Текстовое поле"
      onChange={action('onChange')}
    />
    <Input type="password" placeholder="Пароль" onChange={action('onChange')} />
    <Input type="email" placeholder="Email" onChange={action('onChange')} />
    <Input type="number" placeholder="Число" onChange={action('onChange')} />
  </div>
);

InputTypes.storyName = 'Input Types';
