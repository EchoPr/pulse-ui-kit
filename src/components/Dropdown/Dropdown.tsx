import React, { useState, useRef, useEffect } from 'react';
import ArrowIcon from '../icons/ArrowIcon/ArrowIcon';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  text?: string;
  children?: React.ReactNode;
}

export default function Dropdown({ text, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {text}
        <ArrowIcon />
      </div>

      {isOpen && (
        <div style={{ position: 'absolute' } as React.CSSProperties}>
          {children}
        </div>
      )}
    </div>
  );
}
