import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeState, fontSizeLabelState } from './store';

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size * 2: {fontSizeLabel}</div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </>
  );
}
