import React from 'react';
import './Badge.module.scss';
interface BadgeProps {
    text: string;
    style?: 'default' | 'on-default' | 'danger' | 'on-danger';
    type?: 'span' | 'div';
}
export default function Badge({ text, style, type, }: BadgeProps): React.JSX.Element;
export {};
