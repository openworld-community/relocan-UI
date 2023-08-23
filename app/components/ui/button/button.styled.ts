import styled, { css } from 'styled-components';
import { IButtonProps } from './button.types';

type TStyledButton = {
  $variant: IButtonProps['variant'];
};

export const StyledButton = styled.button<{
  $variant: IButtonProps['variant'];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  max-height: 80px;
  padding: 13px 32px;
  background: var(--gradient-2);
  border-radius: 48px;
  border: hidden;
  cursor: pointer;
  color: var(--dark-blue);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  transition: background-color 0.3s linear, box-shadow 0.3s ease;

  &:focus {
    border: 1.5px solid var(--dark-blue);
  }

  &:disabled {
    background: var(--grey);
    color: ${({ theme }) => theme.palette.common.white};
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & svg {
    width: 22px;
    fill: currentColor;
  }

  ${({ theme, $variant }) =>
    $variant === 'dark' &&
    css`
      background: var(--gradient);
      color: ${theme.palette.common.white};
    `}

  ${({ $variant, theme }) =>
    $variant === 'light' &&
    css`
      box-shadow: 0 0 10px 0 rgba(103, 119, 255, 0.6);
    `}

  ${({ theme, $variant }) =>
    $variant === 'outlined' &&
    css`
      background: transparent;
      color: ${theme.palette.common.white};
      border: 1px solid ${theme.palette.common.white};
      box-shadow: 0 0 5px 0 rgba(103, 119, 255, 0.6);

      &:hover {
        box-shadow: 0 0 10px 0 rgba(103, 119, 255, 0.6);
      }

      &:active {
        background: var(--gradient);
      }
    `}
`;
