import styled from '@emotion/styled/macro';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import {
  PokemonInfo,
  Tabs,
  About,
  Stats,
  Evolution,
} from 'components/DetailPage';
import useSpecies from 'hooks/useSpecies';
import usePokemon from 'hooks/usePokemon';
import { PokemonResponse } from 'types';

type Params = {
  id: string;
};

type Tab = 'about' | 'stats' | 'evolution';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;

const ArrowWrapper = styled.div`
  position: fixed;
  top: 90vh;
  right: 25px;
  opacity: 0.5;
`;

const DetailPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>('about');
  const navigate = useNavigate();

  const { id } = useParams<Params>();

  const pokemonQueryResult = usePokemon<PokemonResponse>(id);
  const speciesQueryResult = useSpecies(id || '');

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(
    () => ({
      name: pokemonQueryResult.data?.data.name,
      types: pokemonQueryResult.data?.data.types,
      height: pokemonQueryResult.data?.data.height,
      weight: pokemonQueryResult.data?.data.weight,
      abilities: pokemonQueryResult.data?.data.abilities,
      baseExp: pokemonQueryResult.data?.data.base_experience,
      stats: pokemonQueryResult.data?.data.stats,
    }),
    [pokemonQueryResult]
  );

  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(
    () => ({
      color: speciesQueryResult.data?.data.color,
      growthRate: speciesQueryResult.data?.data.growth_rate.name,
      flavorText:
        speciesQueryResult.data?.data.flavor_text_entries[0].flavor_text,
      genderRate: speciesQueryResult.data?.data.gender_rate,
      isLegendary: speciesQueryResult.data?.data.is_legendary,
      isMythical: speciesQueryResult.data?.data.is_mythical,
      evolutionChainUrl: speciesQueryResult.data?.data.evolution_chain.url,
    }),
    [speciesQueryResult]
  );

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <Container>
      <PokemonInfo id={id} name={name} types={types} color={color} />
      <TabsWrapper>
        <Tabs tab={selectedTab} onClick={handleTabClick} color={color} />
      </TabsWrapper>
      {selectedTab === 'about' && (
        <About
          isLoading={
            pokemonQueryResult.isLoading || speciesQueryResult.isLoading
          }
          color={color}
          growthRate={growthRate}
          flavorText={flavorText}
          genderRate={genderRate}
          isLegendary={isLegendary}
          isMythical={isMythical}
          types={types}
          weight={weight}
          height={height}
          baseExp={baseExp}
          abilities={abilities}
        />
      )}
      {selectedTab === 'stats' && <Stats stats={stats} color={color} />}
      {selectedTab === 'evolution' && (
        <Evolution url={evolutionChainUrl} color={color} />
      )}
      <ArrowWrapper onClick={() => navigate('/')}>
        <FiArrowLeftCircle size='60' color={color?.name} />
      </ArrowWrapper>
    </Container>
  );
};

export default DetailPage;
