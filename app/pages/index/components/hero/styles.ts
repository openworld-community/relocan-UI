'use client'

import styled from "styled-components";

export const StyledWrapper = styled.section`
  .buttons {
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem auto 0;

    ${({theme}) => theme.breakpoints.up('md')} {
      flex-direction: row;
      gap: 50px;
    }
  }

  .container::before {
    content: "";
    width: 546px;
    height: 546px;
    border-radius: 546px;
    background: #091158;
    filter: blur(150px);
    position: absolute;
    left: -3em;
    top: 3em;
  }

  .content {
    position: relative;
    z-index: 1;
    margin-top: 183px;
  }

  .text {
    max-width: 587px;
  }

  .title {
    margin-bottom: 48px;
  }

  .subtitle {
    max-width: 412px;
  }

  .map {
    position: absolute;
    max-width: 80vw;
    top: 2em;
    right: -6em;
  }
`