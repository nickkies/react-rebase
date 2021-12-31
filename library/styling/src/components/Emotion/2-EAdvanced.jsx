/** @jsxImportSource @emotion/react */
import { css, keyframes, ClassNames } from '@emotion/react';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

// this might be a component from npm that accepts a wrapperClassName prop
let SomeComponent = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function EAdvanced() {
  return (
    <>
      <div
        css={css`
          animation: ${bounce} 2s ease infinite;
        `}
      >
        some bouncing text!
      </div>
      <br />

      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent
            wrapperClassName={css({ color: 'green' })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent>
        )}
      </ClassNames>
    </>
  );
}
