import React from 'react';
import ButtonExampleLabeledBasic from './01-ButtonExampleLabeledBasic';
import ListExample from './02-ListExample';
import ShorthandPropsExample from './04-ShorthandPropsExample';
import FormExampleFieldControlId from './05-FormExampleFieldControlId';

export default function ReactSemanticUIExample() {
  return (
    <>
      <FormExampleFieldControlId />
      <br />
      <ShorthandPropsExample />
      <ListExample />
      <ButtonExampleLabeledBasic />
    </>
  );
}
