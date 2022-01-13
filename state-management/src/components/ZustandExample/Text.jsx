import React from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  fontSize: 14,
  increasefontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
}));

export default function Text() {
  const { fontSize, increasefontSize } = useStore((state) => state);
  return (
    <>
      <button onClick={increasefontSize}>Size up</button>
      <p style={{ fontSize }}>This text will increase in size too.</p>
    </>
  );
}
