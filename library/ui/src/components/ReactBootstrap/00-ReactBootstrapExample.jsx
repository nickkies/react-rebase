import React from 'react';
import AlertExample from './01-AlertExample';
import GridExample from './02-GridExample';
import ButtonExample from './03-ButtonExample';
import CarouselExample from './04-CarouselExample';
import ModalWithGridExample from './05-ModalWithGridExample';
import TransitionExample from './06-TransitionExample';

export default function ReactBootstrapExample() {
  return (
    <>
      <TransitionExample />
      <ModalWithGridExample />
      <CarouselExample />
      <ButtonExample />
      <GridExample />
      <AlertExample />
    </>
  );
}
