'use client';

import type { ReactElement } from 'react';

import { IconArrow } from '@/app/icons';
import { StyledButton } from '@/app/components/ui/button/button.styled';
import { IButtonProps } from './button.types';

export function Button(props: IButtonProps): ReactElement<HTMLButtonElement> {
  const { children, variant, isDiv, addArrow, icon, iconPos, ...otherProps } =
    props;

  return (
    <StyledButton
      {...(isDiv && { as: 'div' })}
      $variant={variant}
      {...otherProps}
    >
      {iconPos === 'left' && icon}
      {children}
      {iconPos === 'right' && icon}
      {/* TODO: replace `addArrow` on `icon` */}
      {addArrow && <IconArrow />}
    </StyledButton>
  );
}
