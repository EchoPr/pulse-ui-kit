import React from 'react';

import styles from './Button.module.scss';

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
  const getButtonClasses = () => {
    const baseClass = styles.btn;
    const variantStyleClass =
      variant && style ? styles[`btn-${variant}-${style}`] : '';
    const sizeClass = styles[`btn-${size}`];

    return [baseClass, variantStyleClass, sizeClass].filter(Boolean).join(' ');
  };

  return (
    <button className={getButtonClasses()} onClick={onClick}>
      {text}
    </button>
  );
}
