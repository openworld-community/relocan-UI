'use client'
import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  ${({theme}) => theme.breakpoints.up('md')} {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`