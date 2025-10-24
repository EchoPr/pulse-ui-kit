import React from 'react';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MenuItem({ children, onClick }: MenuItemProps) {
  return <div className={styles.item}>{children}</div>;
}
