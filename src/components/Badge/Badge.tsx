import React from 'react';

import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  style?: 'default' | 'on-default' | 'danger' | 'on-danger';
  type?: 'span' | 'div';
}

export default function Badge({
  children,
  style = 'default',
  type = 'span',
}: BadgeProps) {
  return (
    <span
      className={`${styles.badge} ${styles[`badge-${style}`]} ${styles[`badge-${type}`]}`}
    >
      {children}
    </span>
  );
}
