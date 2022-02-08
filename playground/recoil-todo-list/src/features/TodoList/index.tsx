import React from 'react';
import styled from '@emotion/styled/macro';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { Todo, selectedTodoState } from './atom';
import { todoStatiscModalOpenState } from '../TodoStatisticsModal/atom';

const EtcItem = styled.li`
  padding: 2px 4px;
  margin: 0;
  font-size: 10px;
  cursor: pointer;
`;

const TodoItem = styled.li<{ done?: boolean; selected?: boolean }>`
  max-width: 100px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ done, selected }) =>
    selected
      ? 'rgba(112, 71, 235, 1)'
      : done
      ? 'transparent'
      : 'rgba(112, 71, 235, 0.4)'};
  padding: 2px 4px;
  margin: 0;
  border-radius: 8px;
  font-size: 10px;
  text-decoration: ${({ done }) => done && 'line-through'};
  cursor: pointer;
`;

const Base = styled.ul`
  list-style: none;
  margin: 36px 0 0 0;
  padding: 0;
  width: 100%;
  height: 60px;
  > li + li {
    margin-top: 1px;
  }
`;

interface Props {
  items: Array<Todo>;
}

const MAX_TODO_LIST_LENGTH = 3;

const TodoList: React.FC<Props> = ({ items }) => {
  const [selectedTodo, setSelectedTodo] = useRecoilState(selectedTodoState);
  const setTodoStatisticsModalOpen = useSetRecoilState(
    todoStatiscModalOpenState
  );

  const handleClick = (e: React.SyntheticEvent<HTMLLIElement>, todo: Todo) => {
    e.stopPropagation();

    setSelectedTodo(
      selectedTodo?.id === todo.id && selectedTodo.date === todo.date
        ? null
        : todo
    );
  };

  const handleTodoStatisticsModalOpen = (
    e: React.SyntheticEvent<HTMLLIElement>
  ) => {
    e.stopPropagation();

    setTodoStatisticsModalOpen(true);
  };

  return (
    <Base>
      {items.slice(0, MAX_TODO_LIST_LENGTH).map((item, index) => (
        <TodoItem
          key={item.id}
          done={item.done}
          selected={
            item.date === selectedTodo?.date && item.id === selectedTodo?.id
          }
          onClick={(e: React.SyntheticEvent<HTMLLIElement>) =>
            handleClick(e, item)
          }
        >
          {item.content}
        </TodoItem>
      ))}
      {items.length > MAX_TODO_LIST_LENGTH && (
        <EtcItem onClick={handleTodoStatisticsModalOpen}>
          {`그 외 ${items.length - MAX_TODO_LIST_LENGTH}개...`}
        </EtcItem>
      )}
    </Base>
  );
};

export default TodoList;
