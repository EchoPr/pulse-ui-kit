import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  disabled?: boolean;

  beforeAction?: React.ReactNode;
  afterAction?: React.ReactNode;
}

export default function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  beforeAction,
  afterAction,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles['input-container']}>
      {beforeAction && (
        <span className={styles['input-before']}>{beforeAction}</span>
      )}

      <input
        type={type}
        {...(onChange
          ? { value: value || '', onChange: handleChange }
          : { defaultValue: value })}
        placeholder={placeholder}
        disabled={disabled}
        className={styles['input-field']}
      />

      {afterAction && (
        <span className={styles['input-after']}>{afterAction}</span>
      )}
    </div>
  );
}
