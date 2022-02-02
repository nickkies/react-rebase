import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const [items, setItems] = useState<Array<Passenger>>([]);

  useEffect(() => {
    const fetch = async () => {
      const params = { page: 0, size: 10 };
      const {
        data: { data },
      } = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        {
          params,
        }
      );

      setItems(data);
    };

    fetch();
  }, []);

  return (
    <div>
      <ul>
        {items.map(({ _id, name }) => (
          <li key={_id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
