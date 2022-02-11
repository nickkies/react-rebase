import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import { API_POKEMON } from 'constant';

const pokemonApi = (id?: string) =>
  axios.get(`${API_POKEMON}/${id || ''}`, { params: { limit: 151 } });

const usePokemon = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
  useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id));

export default usePokemon;
