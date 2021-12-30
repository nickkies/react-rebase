/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const color = 'white';

const style = css`
  color: hotpink;
`;

const style2 = css`
  color: red;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={[anotherStyle, style2]}>Some text with an underline.</div>
);

const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black',
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
    }}
    {...props} // <- props contains the `className` prop
  />
);

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

export default function EBasic() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <br />
      <Button>This my button component.</Button>
      <br />

      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
      <br />
      <P>PPPPP</P>
      <ArticleText>Article</ArticleText>
      <br />

      <div css={base}>This will be turquoise</div>
      <div css={[danger, base]}>
        This will be also be turquoise since the base styles overwrite the
        danger styles.
      </div>
      <div css={[base, danger]}>This will be red</div>
      <br />

      {/* Fallbacks */}
      <div
        css={{
          background: ['red', 'linear-gradient(#e66465, #9198e5)'],
          height: 100,
        }}
      >
        This has a gradient background in browsers that support gradients and is
        red in browsers that don't support gradients
      </div>
    </>
  );
}
