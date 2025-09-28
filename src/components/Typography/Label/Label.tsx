import React from 'react';
import TextProps from '../TextProps';

import './Label.module.scss';

export default function Label({
  children,
  level = 1,
  color = 'white',
}: TextProps) {
  return <p className={`text text-${color} lbl lbl-${level}`}>{children}</p>;
}
