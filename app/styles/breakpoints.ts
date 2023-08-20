import { DefaultTheme } from 'styled-components';

type BreakpointsType = DefaultTheme['breakpoints'];

const breakpointsValues: BreakpointsType['values'] = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const getBreakpointValue = (
  value: Parameters<BreakpointsType['up']>[0]
): string =>
  (typeof value === 'number' ? value : breakpointsValues[value]).toString();

const breakpoints: BreakpointsType = {
  values: breakpointsValues,
  up: (key) => `@media (min-width: ${getBreakpointValue(key)}px)`,
  down: (key) => `@media (max-width: ${getBreakpointValue(key)}px)`,
  between: (start, stop) =>
    `@media (min-width: ${getBreakpointValue(
      start
    )}px) and (max-width: ${getBreakpointValue(stop)}px)`,
};

export default breakpoints;
