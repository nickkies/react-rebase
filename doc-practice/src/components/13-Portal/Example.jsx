import React from 'react';
import { createPortal } from 'react-dom';
import ThankUDialog from './ThankUDialog';

const Portal = (props) => {
  return createPortal(props.children, document.getElementById('portal'));
};

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankUDialog />
      </Portal>
      <div style={{ position: 'absolute' }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
