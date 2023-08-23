import { ButtonHTMLAttributes, ReactNode } from 'react';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant: 'light' | 'dark' | 'outlined';
  addArrow?: boolean;
  isDiv?: boolean;
  width?: number | string;
  height?: number | string;
  // TODO: make icon type
  icon?: string;
  iconPos?: 'left' | 'right';
};
