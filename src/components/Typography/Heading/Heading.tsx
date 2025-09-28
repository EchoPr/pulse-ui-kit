import React from 'react';
import TextProps from '../TextProps';

import './Heading.module.scss';

export default function Heading({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return (
    <p className={`text text-${color} heading heading-${level}`}>{children}</p>
  );
}
