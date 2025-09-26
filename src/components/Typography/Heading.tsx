import React from 'react';
import TextProps from './TextProps';

import './Typography.module.scss';

export default function Heading({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return (
    <h1 className={`text text-${color} heading heading-${level}`}>
      {children}
    </h1>
  );
}
