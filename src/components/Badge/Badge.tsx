import React from 'react';

import './Badge.module.scss';

interface BadgeProps {
  text: string;
  style?: 'default' | 'on-default' | 'danger' | 'on-danger';
  as?: 'span' | 'div';
}

export default function Badge({
  text,
  style = 'default',
  as = 'span',
}: BadgeProps) {
  if (as == 'span')
    return <span className={`badge badge-${style}`}>{text}</span>;
  else return <div className={`badge badge-${style}`}>{text}</div>;
}
