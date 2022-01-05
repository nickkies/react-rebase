import React, { useState } from 'react';
import { AlertDialog, Button } from 'react-onsenui';

export default function AlertExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <AlertDialog isOpen={isOpen} onCancel={() => setIsOpen(false)} cancelable>
        <div className='alert-dialog-title'>Warning</div>
        <div className='alert-dialog-content'>Error</div>
        <div className='alert-dialog-footer'>
          <Button
            className='alert-dialog-button'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className='alert-dialog-button'
            onClick={() => setIsOpen(false)}
          >
            Ok
          </Button>
        </div>
      </AlertDialog>
    </>
  );
}
