import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    text: 'Button',
    variant: 'default',
    style: 'primary',
    size: 'normal',
  },
};

// Primary variants
export const PrimaryDefault: Story = {
  args: {
    text: 'Primary Default',
    variant: 'default',
    style: 'primary',
    size: 'normal',
  },
};

export const PrimaryDanger: Story = {
  args: {
    text: 'Primary Danger',
    variant: 'danger',
    style: 'primary',
    size: 'normal',
  },
};

// Secondary variants
export const SecondaryDefault: Story = {
  args: {
    text: 'Secondary Default',
    variant: 'default',
    style: 'secondary',
    size: 'normal',
  },
};

export const SecondaryDanger: Story = {
  args: {
    text: 'Secondary Danger',
    variant: 'danger',
    style: 'secondary',
    size: 'normal',
  },
};

// On-danger variants
export const OnDangerDefault: Story = {
  args: {
    text: 'On Danger Default',
    variant: 'default',
    style: 'on-danger',
    size: 'normal',
  },
};

export const OnDangerDanger: Story = {
  args: {
    text: 'On Danger Danger',
    variant: 'danger',
    style: 'on-danger',
    size: 'normal',
  },
};

// On-default variants
export const OnDefaultDefault: Story = {
  args: {
    text: 'On Default Default',
    variant: 'default',
    style: 'on-default',
    size: 'normal',
  },
};

export const OnDefaultDanger: Story = {
  args: {
    text: 'On Default Danger',
    variant: 'danger',
    style: 'on-default',
    size: 'normal',
  },
};

// Size variants
export const SmallButton: Story = {
  args: {
    text: 'Small Button',
    variant: 'default',
    style: 'primary',
    size: 'small',
  },
};

export const NormalButton: Story = {
  args: {
    text: 'Normal Button',
    variant: 'default',
    style: 'primary',
    size: 'normal',
  },
};

// All combinations showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Primary:</h3>
        <Button text="Normal" variant="default" style="primary" size="normal" />
        <Button text="Small" variant="default" style="primary" size="small" />
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Default Secondary:</h3>
        <Button
          text="Normal"
          variant="default"
          style="secondary"
          size="normal"
        />
        <Button text="Small" variant="default" style="secondary" size="small" />
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Primary:</h3>
        <Button text="Normal" variant="danger" style="primary" size="normal" />
        <Button text="Small" variant="danger" style="primary" size="small" />
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>Danger Secondary:</h3>
        <Button
          text="Normal"
          variant="danger"
          style="secondary"
          size="normal"
        />
        <Button text="Small" variant="danger" style="secondary" size="small" />
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>On-Danger:</h3>
        <Button
          text="Default Normal"
          variant="default"
          style="on-danger"
          size="normal"
        />
        <Button
          text="Default Small"
          variant="default"
          style="on-danger"
          size="small"
        />
        <Button
          text="Danger Normal"
          variant="danger"
          style="on-danger"
          size="normal"
        />
        <Button
          text="Danger Small"
          variant="danger"
          style="on-danger"
          size="small"
        />
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h3 style={{ margin: 0, minWidth: '120px' }}>On-Default:</h3>
        <Button
          text="Default Normal"
          variant="default"
          style="on-default"
          size="normal"
        />
        <Button
          text="Default Small"
          variant="default"
          style="on-default"
          size="small"
        />
        <Button
          text="Danger Normal"
          variant="danger"
          style="on-default"
          size="normal"
        />
        <Button
          text="Danger Small"
          variant="danger"
          style="on-default"
          size="small"
        />
      </div>
    </div>
  ),
};
