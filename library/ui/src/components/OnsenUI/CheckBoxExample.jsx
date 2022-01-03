import React from 'react';
import { List, ListItem, Checkbox } from 'react-onsenui';

export default function CheckboxExample() {
  return (
    <List>
      <ListItem tappable>
        <label className='left'>
          <Checkbox input-id='check-1' checked></Checkbox>
        </label>
        <label for='check-1' className='center'>
          Apple
        </label>
      </ListItem>
      <ListItem tappable>
        <label className='left'>
          <Checkbox input-id='check-2'></Checkbox>
        </label>
        <label for='check-2' className='center'>
          Banana
        </label>
      </ListItem>
    </List>
  );
}
