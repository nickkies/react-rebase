import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.color */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    color: 'palevioletred',
    borderColor: 'blue',
  },
};

// Define what props.theme will look like
const defaultTheme = {
  color: 'mediumseagreen',
  borderColor: 'pink',
};

const redTheme = {
  color: 'palevioletred',
  borderColor: 'blue',
};

export default function Theming() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <div>
      <button onClick={() => setTheme(redTheme)}>palevioletred</button>
      <button onClick={() => setTheme(defaultTheme)}>mediumseagreen</button>

      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
}
