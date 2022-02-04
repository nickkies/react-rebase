import styled from '@emotion/styled/macro';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 8px 24px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #f8f7fa;
`;

const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #f8f7fa;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 98%;
  height: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  padding-block: 12px;
  > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      color: #f8f7fa;
      width: 14%;
    }
  }
`;

const TableBody = styled.tbody``;

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

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #28272a;
  ${Header} + ${Table} {
    margin-top: 36px;
  }
`;

const DAYS = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar: React.FC = () => {
  return (
    <Base>
      <Header>
        <ButtonContainer>
          <ArrowButton pos='left'>
            <BiChevronLeft />
          </ArrowButton>
          <Title>{MONTHS[0]}</Title>
          <ArrowButton pos='right'>
            <BiChevronRight />
          </ArrowButton>
        </ButtonContainer>
      </Header>
      <Table>
        <TableHeader>
          <tr>
            {DAYS.map((day) => (
              <th key={day} align='center'>
                {day}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          <tr>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
          </tr>
          <tr>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
          </tr>
          <tr>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
          </tr>
          <tr>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
            <TableData>
              <DisplayDate>1</DisplayDate>
            </TableData>
          </tr>
        </TableBody>
      </Table>
    </Base>
  );
};

export default Calendar;
