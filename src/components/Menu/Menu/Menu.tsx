import React from 'react';

import styles from './Menu.module.scss';

interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return <div className={styles.menu}>{children}</div>;
}
