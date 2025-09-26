import React from 'react';
import TextProps from './TextProps';

import './Typography.module.scss';

export default function Heading({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return (
    <label className={`text text-${color} lbl lbl-${level}`}>{children}</label>
  );
}
