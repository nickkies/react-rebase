import styled from '@emotion/styled/macro';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Header = styled.div``;

const Title = styled.h1``;

const ArrowButton = styled.button``;

const ButtonContaier = styled.div``;

const Table = styled.table``;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableData = styled.td``;

const DisplayDate = styled.div``;

const Base = styled.div``;

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
        <ButtonContaier>
          <ArrowButton>
            <BiChevronLeft />
          </ArrowButton>
          <Title>{MONTHS[0]}</Title>
          <ArrowButton>
            <BiChevronRight />
          </ArrowButton>
        </ButtonContaier>
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
        <TableBody></TableBody>
      </Table>
    </Base>
  );
};

export default Calendar;
