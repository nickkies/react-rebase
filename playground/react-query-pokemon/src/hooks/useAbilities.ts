import axios, { AxiosResponse } from 'axios';
import { useQueries } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import { Ability, AbilityResponse } from 'types';

type ReturnType = Array<UseQueryResult<AxiosResponse<AbilityResponse>, Error>>;

const useAbilities = (abilities: Array<Ability>): ReturnType => {
  const queries = abilities.map(({ ability }, idx) => ({
    queryKey: ['ability', idx],
    queryFn: () => axios.get(ability.url),
  }));

  return useQueries(queries) as ReturnType;
};

export default useAbilities;
