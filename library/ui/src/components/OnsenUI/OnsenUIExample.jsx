import React from 'react';
import ButtonExample from './ButtonExample';
import { Page } from 'react-onsenui';
import ActionSheetExample from './ActionSheetExample';
import CheckBoxExample from './CheckBoxExample';
import FabExample from './FabExample';

export default function OnsenUIExample() {
  return (
    <Page>
      <FabExample />
      <CheckBoxExample />
      <ActionSheetExample />
      <ButtonExample />
    </Page>
  );
}
