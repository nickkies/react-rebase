import React, { useState } from 'react';
import { useStore } from './TodoStore';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useStore((state) => [
    state.todoListState,
    state.setTodoListState,
  ]);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue('');
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
