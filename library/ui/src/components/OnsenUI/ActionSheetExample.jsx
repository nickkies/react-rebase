import React, { useState } from 'react';
import { Button, ActionSheet, ActionSheetButton } from 'react-onsenui';

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={handleClick}>Action Sheet Open</Button>
      <ActionSheet isOpen={open} title='Action Sheet'>
        <ActionSheetButton>Label1</ActionSheetButton>
        <ActionSheetButton>Label2</ActionSheetButton>
        <ActionSheetButton>Label3</ActionSheetButton>
        <ActionSheetButton
          modifier='destructive'
          onClick={() => setOpen(false)}
        >
          Cansel
        </ActionSheetButton>
        <ActionSheetButton onClick={() => setOpen(false)}>
          Save
        </ActionSheetButton>
      </ActionSheet>
    </>
  );
}
