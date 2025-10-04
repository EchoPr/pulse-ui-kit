import React from 'react';
import TextProps from '../TextProps';

import styles from './Label.module.scss';
import textStyles from '../Typography.module.scss';

export default function Label({
  children,
  level = 1,
  color = 'grey',
}: TextProps) {
  return (
    <p
      className={`${textStyles.text} ${textStyles[`text-${color}`]} ${styles.lbl} ${styles[`lbl-${level}`]}`}
    >
      {children}
    </p>
  );
}
