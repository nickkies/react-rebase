import React from 'react';
import ButtonExample from './ButtonExample';
import { Page } from 'react-onsenui';
import ActionSheetExample from './ActionSheetExample';
import CheckBoxExample from './CheckBoxExample';

export default function OnsenUIExample() {
  return (
    <Page>
      <CheckBoxExample />
      <ActionSheetExample />
      <ButtonExample />
    </Page>
  );
}
