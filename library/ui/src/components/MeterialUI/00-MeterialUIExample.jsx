import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import GridExample from './01-GridExample';
import ThemeExample from './02-ThemeExample';
import ButtonExample from './03-ButtonExample';
import CheckboxExample from './04-CheckboxExample';
import DrawerExample from './05-DrawerExample';
import StepperExample from './06-StepperExample';
import VirtaulizedListExample from './07-VirtaulizedListExample';
import TreeViewExample from './08-TreeViewExample';

export default function MeterialUIExample() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TreeViewExample />
      <VirtaulizedListExample />
      <StepperExample />
      <DrawerExample />
      <CheckboxExample />
      <ButtonExample />
      <ThemeExample />
      <GridExample />
    </ThemeProvider>
  );
}
