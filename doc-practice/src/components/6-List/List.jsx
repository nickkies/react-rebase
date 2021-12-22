import React from 'react';

export default function List() {
  const todos = [
    { id: 1, text: 'Drink Water' },
    { id: 2, text: 'Wash Car' },
    { id: 3, text: 'Eat Dinner' },
    { id: 4, text: 'Having Happy' },
  ];

  const Item = (props) => {
    return (
      <li
      // key={props.id} // 여기아님
      >
        {props.text}
      </li>
    );
  };

  const todoList = todos.map((todo) => (
    // key는 attribute => 자식에게 전달 x
    <Item key={todo.id.toString()} {...todo} /> // 여기에 key주기
  ));

  return <>{todoList}</>;
}
