import { DefaultTheme } from 'styled-components';

type BreakpointsType = DefaultTheme['breakpoints'];

const breakpointsValues: BreakpointsType['values'] = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1620,
  xl: 1800,
};

const getBreakpointValue = (
  value: Parameters<BreakpointsType['up']>[0],
  direction: 'up' | 'down' = 'up'
): string => {
  const breakpointValue =
    typeof value === 'number' ? value : breakpointsValues[value];
  return (breakpointValue - Number(direction === 'down')).toString();
};

const breakpoints: BreakpointsType = {
  values: breakpointsValues,
  up: (key) => `@media (min-width: ${getBreakpointValue(key, 'up')}px)`,
  down: (key) => `@media (max-width: ${getBreakpointValue(key, 'down')}px)`,
  between: (start, stop) =>
    `@media (min-width: ${getBreakpointValue(
      start,
      'up'
    )}px) and (max-width: ${getBreakpointValue(stop, 'down')}px)`,
};

export default breakpoints;
