import React from 'react';
import ButtonExampleLabeledBasic from './01-ButtonExampleLabeledBasic';
import ListExample from './02-ListExample';
import ShorthandPropsExample from './04-ShorthandPropsExample';
import FormExampleFieldControlId from './05-FormExampleFieldControlId';
import VisibilityProgressExample from './06-VisibilityProgressExample';

export default function ReactSemanticUIExample() {
  return (
    <>
      <VisibilityProgressExample />
      <FormExampleFieldControlId />
      <br />
      <ShorthandPropsExample />
      <ListExample />
      <ButtonExampleLabeledBasic />
    </>
  );
}
