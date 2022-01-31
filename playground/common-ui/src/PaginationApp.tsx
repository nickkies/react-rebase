import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './components/pagination/Pagination';

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
  const [page, setpage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 10 };
      const {
        data: { totalPages, data },
      } = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        {
          params,
        }
      );

      setTotalPages(totalPages);
      setItems(data);
    };

    fetch();
  }, [page]);

  const handlePageChange = (currentPage: number): void => {
    setpage(currentPage);
  };

  return (
    <div>
      <ul>
        {items.map(({ _id, name }) => (
          <li key={_id}>{name}</li>
        ))}
      </ul>
      <Pagination
        count={totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
