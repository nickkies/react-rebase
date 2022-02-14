import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { API_POKEMON_SPECIRES } from 'constant';
import { SpeciesResponse } from 'types';

const speciesApi = (id: string) => axios.get(`${API_POKEMON_SPECIRES}/${id}`);

const useSpecies = (id: string) =>
  useQuery<AxiosResponse<SpeciesResponse>, Error>(['speices', { id }], () =>
    speciesApi(id)
  );

export default useSpecies;
