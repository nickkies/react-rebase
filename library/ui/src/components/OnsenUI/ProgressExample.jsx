import React from 'react';
import { ProgressBar, ProgressCircular } from 'react-onsenui';

export default function ProgressExample() {
  return (
    <>
      <ProgressCircular indeterminate />
      <ProgressCircular value='30' secondaryValue='50' />
      <ProgressCircular indeterminate modifier='material' />
      <ProgressBar indeterminate modifier='material' />
    </>
  );
}
