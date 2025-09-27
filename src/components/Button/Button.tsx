import React from 'react';

import './Button.module.scss';

type variant = 'default' | 'danger';
type style = 'primary' | 'secondary' | 'on-danger' | 'on-default';
type size = 'small' | 'normal';

interface ButtonProps {
  text: string;
  variant?: variant;
  style?: style;
  size?: size;
  onClick?: () => void;
}

export default function Button({
  text,
  variant,
  style = 'primary',
  size = 'normal',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}-${style} btn-${size}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
