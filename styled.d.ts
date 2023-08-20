import 'styled-components';

declare module 'styled-components' {
  export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export interface CommonColors {
    black: string;
    white: string;
  }

  export interface TypeText {
    primary: string;
    secondary: string;
  }

  export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
  }

  export interface DefaultTheme {
    palette: {
      common: CommonColors;
      text: TypeText;
      primary: PaletteColor;
      error: PaletteColor;
      success: PaletteColor;

      gradient: {};
    };
    breakpoints: {
      values: Record<Breakpoint, number>;
      up: (key: Breakpoint | number) => string;
      down: (key: Breakpoint | number) => string;
      between: (start: Breakpoint | number, end: Breakpoint | number) => string;
    };
  }
}
