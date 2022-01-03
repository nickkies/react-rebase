import React from 'react';
import { Button } from 'react-onsenui';

export default function ButtonExample() {
  const handleClick = () => {
    alert('pressed');
  };

  return (
    <>
      <Button modifier='large--cta' onClick={handleClick}>
        large--cta
      </Button>
      <br />
      <br />

      <Button modifier='outline'>outline</Button>
      <br />
      <br />

      <Button modifier='light'>light</Button>
      <br />
      <br />

      <Button modifier='quiet'>quiet</Button>
      <br />
      <br />

      <Button modifier='quiet'>quiet</Button>
      <br />
      <br />

      <Button modifier='material' disabled={true}>
        disabled, material
      </Button>
      <br />
      <br />

      <Button modifier='material--flat' ripple={true}>
        ripple, material--flat
      </Button>
      <br />
      <br />
    </>
  );
}
