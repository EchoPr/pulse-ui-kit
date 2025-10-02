import React from 'react';
import './Input.scss';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  disabled?: boolean;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  prefix,
  suffix,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="input-container">
      {prefix && <span className="input-prefix">{prefix}</span>}

      <input
        type={type}
        {...(onChange
          ? { value: value || '', onChange: handleChange }
          : { defaultValue: value })}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field"
      />

      {suffix && <span className="input-suffix">{suffix}</span>}
    </div>
  );
}
