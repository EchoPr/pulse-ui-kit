import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'on-default', 'danger', 'on-danger'],
    },
    type: {
      control: { type: 'select' },
      options: ['span', 'div'],
    },
    children: {
      control: 'text',
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
  style: 'default',
  type: 'span',
};

export const OnDefault = Template.bind({});
OnDefault.args = {
  children: 'On Default Badge',
  style: 'on-default',
  type: 'span',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Badge',
  style: 'danger',
  type: 'span',
};

export const OnDanger = Template.bind({});
OnDanger.args = {
  children: 'On Danger Badge',
  style: 'on-danger',
  type: 'span',
};

export const WithDivType = Template.bind({});
WithDivType.args = {
  children: 'Div Badge',
  style: 'default',
  type: 'div',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  children: 'This is a badge with longer text content',
  style: 'default',
  type: 'span',
};

export const WithNumbers = Template.bind({});
WithNumbers.args = {
  children: '42',
  style: 'danger',
  type: 'span',
};

// Демонстрация всех вариантов в одной стори
export const AllVariants = () => (
  <div
    style={{
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <Badge style="default">Default</Badge>
    <Badge style="on-default">On Default</Badge>
    <Badge style="danger">Danger</Badge>
    <Badge style="on-danger">On Danger</Badge>
    <Badge style="default" type="div">
      Div Type
    </Badge>
  </div>
);

AllVariants.storyName = 'All Variants';
