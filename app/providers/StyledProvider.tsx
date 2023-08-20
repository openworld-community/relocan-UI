'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/app/styles/registry';
import defaultTheme from '@/app/styles/defaultTheme';

const StyledProvider = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default StyledProvider;
