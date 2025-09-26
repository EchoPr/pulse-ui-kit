import React from 'react';
import TextProps from './TextProps';

import './Typography.module.scss';

export default function Heading({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return <p className={`text text-${color} bdy bdy-${level}`}>{children}</p>;
}
