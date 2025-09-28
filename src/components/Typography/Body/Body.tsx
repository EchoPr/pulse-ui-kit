import React from 'react';
import TextProps from '../TextProps';

import './Body.module.scss';

export default function Body({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return <p className={`text text-${color} bdy bdy-${level}`}>{children}</p>;
}
