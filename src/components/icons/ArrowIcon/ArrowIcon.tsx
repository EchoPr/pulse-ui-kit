import React from 'react';

import styles from './ArrowIcon.module.scss';

interface ArrowIconProps {
  size?: number;
  color?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ArrowIcon({
  size = 14,
  color = 'hsla(0, 0%, 47%, 1)',
  direction = 'down',
}: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      className={`${styles.arrow} ${styles[`arrow-${direction}`]}`}
    >
      <path
        d="M13.6167 4.28795C13.8222 4.47477 13.8222 4.79796 13.6167 4.98478L7.67267 10.3885C7.29125 10.7352 6.70875 10.7352 6.32733 10.3885L0.383257 4.98478C0.177752 4.79796 0.177753 4.47477 0.383258 4.28795C0.562858 4.12467 0.837142 4.12467 1.01674 4.28795L6.32733 9.11575C6.70875 9.4625 7.29125 9.4625 7.67267 9.11575L12.9833 4.28795C13.1629 4.12467 13.4371 4.12467 13.6167 4.28795Z"
        fill={color}
      />
    </svg>
  );
}
