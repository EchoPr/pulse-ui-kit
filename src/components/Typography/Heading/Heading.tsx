import React from 'react';
import TextProps from '../TextProps';

import styles from './Heading.module.scss';
import textStyles from '../Typography.module.scss';

export default function Heading({
  children,
  level = 1,
  color = 'grey',
}: TextProps) {
  return (
    <p
      className={`${textStyles.text} ${textStyles[`text-${color}`]} ${styles.heading} ${styles[`heading-${level}`]}`}
    >
      {children}
    </p>
  );
}
