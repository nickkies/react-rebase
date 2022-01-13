import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  scratches: 0,
  addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));

export default function Scratches() {
  const scratchRef = useRef(useStore.getState().scratches);
  const addScratches = useStore((state) => state.addScratches);

  useEffect(() => {
    useStore.subscribe(
      (scratches) => {
        scratchRef.current = scratches;
        console.log(scratches);
        console.log(scratchRef.current);
        if (scratches > 3) alert('too many');
      },
      (state) => state.scratches
    );
  }, []);

  return (
    <div>
      <br />
      {scratchRef.current}
      <br />
      <button onClick={addScratches}>Add scratches</button>
    </div>
  );
}
