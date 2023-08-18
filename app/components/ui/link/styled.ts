import styled from "styled-components";

export const StyledLink = styled.a`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey);
  transition: color .3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--light-blue);
  }
  
  &:active {
    color: var(--blue);
  }
  
  &:disabled {
    color: var(--dark-grey);
  }
  
  & > svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
    vertical-align: middle;
  }`