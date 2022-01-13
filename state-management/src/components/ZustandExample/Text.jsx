import React from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  fontSize: 14,
  increasefontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
  trigger: false,
  toggleTrigger: () => set((state) => ({ trigger: !state.trigger }), true),
}));

function FontLabel() {
  const { fontSize, increasefontSize, fontSizeLabel, toggleTrigger, trigger } =
    useStore(
      (state) => ({
        ...state,
        fontSizeLabel: state.fontSize + 'px',
      }),
      (oldState, newState) => oldState.trigger === newState.trigger
    );

  return (
    <>
      <div style={{ fontSize }}>Current font Size: {fontSizeLabel}</div>
      <button onClick={increasefontSize}>Size up</button>
      <button onClick={toggleTrigger}>toggle {trigger.toString()}</button>
    </>
  );
}

export default function Text() {
  const fontSize = useStore((state) => state.fontSize);
  return (
    <>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      <FontLabel />
    </>
  );
}
