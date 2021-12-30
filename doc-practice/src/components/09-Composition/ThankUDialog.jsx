import React from 'react';
import Dialog from './Dialog';

export default function ThankUDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: 'purple' }}>Thanks</h1>}
      description='It is honor to meet u!'
      button={
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          close
        </button>
      }
    />
  );
}
