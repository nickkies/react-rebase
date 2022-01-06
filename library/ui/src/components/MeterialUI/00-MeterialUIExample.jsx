import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import GridExample from './01-GridExample';
import ThemeExample from './02-ThemeExample';
import ButtonExample from './03-ButtonExample';
import CheckboxExample from './04-CheckboxExample';

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

      <CheckboxExample />
      <ButtonExample />
      <ThemeExample />
      <GridExample />
    </ThemeProvider>
  );
}
