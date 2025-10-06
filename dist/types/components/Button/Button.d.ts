import React from 'react';
type variant = 'default' | 'danger';
type style = 'primary' | 'secondary' | 'on-danger' | 'on-default';
type size = 'small' | 'normal';
interface ButtonProps {
    children: React.ReactNode;
    variant?: variant;
    style?: style;
    size?: size;
    onClick?: () => void;
}
export default function Button({ children, variant, style, size, onClick, }: ButtonProps): React.JSX.Element;
export {};
