import React from 'react';
import AlertExample from './01-AlertExample';
import GridExample from './02-GridExample';
import ButtonExample from './03-ButtonExample';
import CarouselExample from './04-CarouselExample';
import ModalWithGridExample from './05-ModalWithGridExample';

export default function ReactBootstrapExample() {
  return (
    <>
      <ModalWithGridExample />
      <CarouselExample />
      <ButtonExample />
      <GridExample />
      <AlertExample />
    </>
  );
}
