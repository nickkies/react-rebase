import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import {
  Response,
  Passenger as PassengerType,
} from '../../types/InfiniteScroll';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function IntersectionObserver() {
  const [passengers, setPassengers] = useState<Array<PassengerType>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const getPassengers = async () => {
    const params = { page, size: 10 };

    try {
      const response = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        { params }
      );

      const { data, totalPages } = response.data;

      setPassengers((prev) => [...prev, ...data]);
      setIsLast(totalPages === page);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    !isLast && getPassengers();
  }, [page]);

  return (
    <div>
      {passengers.map(({ _id, name }, idx) => (
        <Passenger
          key={_id}
          isLastItem={passengers.length - 1 === idx}
          onFetchMorePassengers={() => setPage((prev) => page + 1)}
        >
          {name}
        </Passenger>
      ))}
    </div>
  );
}

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
}

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  border: 1px dashed #000;
  & + & {
    border-top: none;
  }
`;

const Passenger: React.FC<Props> = ({
  isLastItem,
  onFetchMorePassengers,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  }, [isLastItem, isIntersecting]);

  return <Div ref={ref}>{children}</Div>;
};
