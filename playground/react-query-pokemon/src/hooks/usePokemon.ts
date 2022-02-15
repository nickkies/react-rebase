import axios, { AxiosResponse } from 'axios';
import { useQueries, useQuery } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import { API_POKEMON } from 'constant';
import { PokemonResponse } from 'types';

type PokemonRes = Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>>;

const pokemonApi = (id?: string) =>
  axios.get(`${API_POKEMON}/${id || ''}`, { params: { limit: 151 } });

export const usePokemonQueries = (names: string[]): PokemonRes => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: () => pokemonApi(name),
  }));

  return useQueries(queries) as PokemonRes;
};

const usePokemon = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
  useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id));

export default usePokemon;
