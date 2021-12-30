import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
  }
`;

export default function SCGlobalStyle() {
  return (
    <>
      <div>
        <GlobalStyle whiteColor />
        <button>Inside Button</button>
      </div>
      <button>Outside Button</button>
    </>
  );
}
