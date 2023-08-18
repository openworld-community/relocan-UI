import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: grid;
  grid-template-columns: 1fr 155px;
  height: 84px;
  align-items: center;
  width: 100%;
  max-width: 476px;
  border-radius: 48px;
  padding: 1px;
  cursor: pointer;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  transition: background-color 0.3s linear,  box-shadow 0.3s ease;
  
  &.light {
    border: none;
    background: var(--white);
    color: var(--dark-blue);
    
    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(103, 119, 255, 0.60);
    }
    
    &:active {
      background: var(--gradient);
      color: var(--white);
    }
    
    & > button {
      border: 2px solid var(--white);
    }
  }
  
  &.dark {
    background: var(--gradient);
    border: 2px solid var(--white);
    box-shadow: 0px 0px 5px 0px rgba(103, 119, 255, 0.60);
    
    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(103, 119, 255, 0.60);
    }
    
    &:active {
      background: var(--white);
      color: var(--dark-blue);
      
      & > button {
        border: 2px solid var(--dark-blue);
      }
    }
    
  }
  
  & > div {
    text-align: center;
  }
  
  & > button {
    pointer-events: none;
  }
  
  &:disabled {
    background: var(--grey);
    color: var(--white);
    pointer-events: none;
    box-shadow: none;
    border: none;
    
    
    & > button {
      background: var(--grey);
      color: var(--white);
      box-shadow: none;
    }
  }
`