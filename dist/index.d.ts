import React$1 from 'react';

type variant = 'default' | 'danger';
type style = 'primary' | 'secondary' | 'on-danger' | 'on-default';
type size = 'small' | 'normal';
interface ButtonProps {
    children: React$1.ReactNode;
    variant?: variant;
    style?: style;
    size?: size;
    onClick?: () => void;
}
declare function Button({ children, variant, style, size, onClick, }: ButtonProps): React$1.JSX.Element;

interface TextProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3;
    color?: 'white' | 'grey' | 'danger';
}

declare function Heading({ children, level, color, }: TextProps): React$1.JSX.Element;

declare function Body({ children, level, color, }: TextProps): React$1.JSX.Element;

declare function Label({ children, level, color, }: TextProps): React$1.JSX.Element;

interface BadgeProps {
    text: string;
    style?: 'default' | 'on-default' | 'danger' | 'on-danger';
    type?: 'span' | 'div';
}
declare function Badge({ text, style, type, }: BadgeProps): React$1.JSX.Element;

export { Badge, Body, Button, Heading, Label };
