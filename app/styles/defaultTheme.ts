import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  palette: {
    common: {
      white: '#FEFDFF',
      black: '#212121',
    },
    text: {
      primary: '#FEFDFF',
      secondary: '#B0B0B0',
    },
    primary: {
      main: '#5C6DFE',
      light: '#8B96FF',
      dark: '#030B26',
    },
    success: {
      main: '#8B96FF',
      light: 'rgba(139, 150, 255, 0.2)',
      dark: '#8B96FF',
    },
    error: {
      main: '#EB5757',
      light: 'rgba(235, 87, 87, 0.2)',
      dark: '#EB5757',
    },
    gradient: {},
  },
  breakpoints,
};

export default theme;
