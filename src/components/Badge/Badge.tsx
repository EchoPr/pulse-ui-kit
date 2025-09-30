import React from 'react';

import './Badge.module.scss';

interface BadgeProps {
  text: string;
  style?: 'default' | 'on-default' | 'danger' | 'on-danger';
  type?: 'span' | 'div';
}

export default function Badge({
  text,
  style = 'default',
  type = 'span',
}: BadgeProps) {
  return <span className={`badge badge-${style} badge-${type}`}>{text}</span>;
}
