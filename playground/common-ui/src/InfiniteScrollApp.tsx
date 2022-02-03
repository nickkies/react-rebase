import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';

const Ul = styled.ul`
  overflow: hidden scroll;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 50%;
  height: 50vh;
`;

const Li = styled.li`
  font-size: 24px;
`;

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

interface Response {
  totalPassanger: number;
  totalPages: number;
  data: Array<Passenger>;
}

function App() {
  const listRef = useRef<HTMLUListElement>(null);
  const currentPageRef = useRef<number>(0);

  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const getPassengers = async (init?: boolean) => {
    const params = { page: currentPageRef.current, size: 30 };

    try {
      const response = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        { params }
      );

      const { data, totalPages } = response.data;

      init ? setPassengers(data) : setPassengers((prev) => [...prev, ...data]);
      setIsLast(totalPages === currentPageRef.current);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPassengers(true);
  }, []);

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;

      !isLast && getPassengers();
    }
  }, [isScrollBottom, isLast]);

  const handleScroll = () => {
    const ref = listRef.current;

    if (ref) {
      const { scrollHeight, offsetHeight, scrollTop } = ref;
      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  };

  return (
    <div>
      <Ul ref={listRef} onScroll={handleScroll}>
        {passengers.map(({ _id, name }) => (
          <Li key={_id}>{name}</Li>
        ))}
      </Ul>
    </div>
  );
}

export default App;
