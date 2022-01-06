import React, { useState } from 'react';
import { Button, Collapse, Spinner } from 'react-bootstrap';

export default function TransitionExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-btn'
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id='example-collapse-btn'>
          <Button variant='primary' disabled>
            <Spinner
              as='span'
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            <span className='visually-hidden'>Loading...</span>
          </Button>
          <Button variant='primary' disabled>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Loading...
          </Button>
        </div>
      </Collapse>
    </>
  );
}
