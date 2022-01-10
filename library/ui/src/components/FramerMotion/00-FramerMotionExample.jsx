import React from 'react';
import AnimationExample from './01-AnimationExample';
import KeyFrameExample from './02-KeyFrameExample';
import SVGLine from './03-SVGLine';

export default function FramerMotionExample() {
  return (
    <>
      <SVGLine />
      <KeyFrameExample />
      <AnimationExample />
    </>
  );
}
