import styled from "styled-components";

const ButtonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  height: 100%;
  max-height: 80px;
  padding: 13px 32px;
  background: var(--gradient-2);
  border-radius: 48px;
  cursor: pointer;
  color: var(--dark-blue);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  border: hidden;
  transition: background-color 0.3s linear,  box-shadow 0.3s ease;
  
  &.dark {
    background: var(--gradient);
    color: var(--white);
  }
  
  &:focus {
    border: 1.5px solid var(--dark-blue);
  }

  &:disabled {
    background: var(--grey);
    color: var(--white);
    fill: var(--white);
  }
  
  & svg {
    width: 22px;
    fill: currentColor;
  }
  
  &.light {
    box-shadow: 0 0 10px 0 rgba(103, 119, 255, 0.60);
  }
  
  &.outlined {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--white);
    box-shadow: 0 0 5px 0 rgba(103, 119, 255, 0.60);
    
    &:hover {
        box-shadow: 0 0 10px 0 rgba(103, 119, 255, 0.60);
    }
    
    &:active {
        background: var(--gradient);
    }
  }
`

export const DivButton = styled.div`${ButtonStyles}`
export const ButtonStyled = styled.button`${ButtonStyles}`