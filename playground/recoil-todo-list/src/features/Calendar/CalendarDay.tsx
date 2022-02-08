import styled from '@emotion/styled/macro';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

import TodoList from '../TodoList';
import { filteredTodoListState, selectedDateState } from '../TodoList/atom';
import { todoFormModalOpenState } from '../TodoFormModal/atom';
import { todoStatisticsModalOpenState } from '../TodoStatisticsModal/atom';
import { isSameDay } from '../../utils';

const TableData = styled.td`
  text-align: center;
  color: #c9c8cc;
  padding: 8px;
  position: relative;
`;

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  color: ${({ isToday }) => isToday && '#F8F7FA'};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? '#7047EB' : isToday ? '#313133' : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const CalendarDay: React.FC<{ date: Date }> = ({ date }) => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const todoList = useRecoilValue(filteredTodoListState(date));

  const setTodoFormModalOpen = useSetRecoilState(todoFormModalOpenState);
  const setTodoStatisticsModalOpen = useSetRecoilState(
    todoStatisticsModalOpenState
  );

  const handleTodoFormModalOpen = (d: number) => {
    setSelectedDate(new Date(selectedDate.setDate(d)));
    setTodoFormModalOpen(true);
  };

  const handleDateSelect = (d: number) => {
    setSelectedDate(new Date(selectedDate.setDate(d)));
  };

  const handleTodoStatisticsModalOpen = (
    e: React.SyntheticEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    setTodoStatisticsModalOpen(true);
  };

  return (
    <TableData
      key={date.toDateString()}
      align='center'
      onDoubleClick={() => handleTodoFormModalOpen(date.getDate())}
    >
      <div>
        <DisplayDate
          isSelected={isSameDay(selectedDate, date)}
          isToday={isSameDay(today, date)}
          onClick={() => handleDateSelect(date.getDate())}
          onDoubleClick={handleTodoStatisticsModalOpen}
        >
          {date.getDate()}
        </DisplayDate>
        <TodoList items={todoList} />
      </div>
    </TableData>
  );
};

export default CalendarDay;
