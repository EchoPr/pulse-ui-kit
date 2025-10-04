import React from 'react';
import TextProps from '../TextProps';

import styles from './Body.module.scss';
import textStyles from '../Typography.module.scss';

export default function Body({
  children,
  level = 1,
  color = 'grey',
}: TextProps) {
  return (
    <p
      className={`${textStyles.text} ${textStyles[`text-${color}`]} ${styles.bdy} ${styles[`bdy-${level}`]}`}
    >
      {children}
    </p>
  );
}
