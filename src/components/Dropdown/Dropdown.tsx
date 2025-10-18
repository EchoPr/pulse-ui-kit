import React, { useState, useRef, useEffect } from 'react';

import styles from './Dropdown.module.scss';

import image from '../../assets/icons/arrow.png';

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
        <img src={image} className={styles.arrow} />
      </div>

      {isOpen && (
        <div style={{ position: 'absolute' } as React.CSSProperties}>
          {children}
        </div>
      )}
    </div>
  );
}
