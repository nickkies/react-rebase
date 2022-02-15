import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';

import useEvolutionChain from 'hooks/useEvolutionChain';
import { Chain, Color } from 'types';
import { EvolutionStage } from '.';

type Props = {
  color?: Color;
  url?: string;
};

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  > li + li {
    margin-top: 24px;
  }
`;

const Evolution: React.FC<Props> = ({ url, color }) => {
  const { isSuccess, data } = useEvolutionChain(url);

  const [evolutionChain, setEvolutionChain] = useState<
    Array<{
      from: { name: string; url: string };
      to: { name: string; url: string };
      level: number;
    }>
  >([]);

  useEffect(() => {
    const makeEvolutionChain = (chain: Chain) => {
      if (chain.evolves_to.length) {
        const [evolvesTo] = chain.evolves_to;

        const from = chain.species;
        const to = evolvesTo.species;
        const level = evolvesTo.evolution_details[0].min_level;

        setEvolutionChain((prev) => [...prev, { from, to, level }]);

        makeEvolutionChain(chain.evolves_to[0]);
      }
    };

    isSuccess && data && makeEvolutionChain(data.data.chain);

    return (): void => {
      setEvolutionChain([]);
    };
  }, [isSuccess, data]);

  return (
    <Base>
      <Title color='green'>Evolution</Title>
      {evolutionChain.length && (
        <List>
          {evolutionChain.map(({ from, to, level }, idx) => (
            <EvolutionStage key={idx} />
          ))}
        </List>
      )}
    </Base>
  );
};

export default Evolution;
