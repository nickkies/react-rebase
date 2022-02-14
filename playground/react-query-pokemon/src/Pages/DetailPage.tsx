import styled from '@emotion/styled/macro';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  PokemonInfo,
  Tabs,
  About,
  Stats,
  Evolution,
} from 'components/DetailPage';
import useSpecies from 'hooks/useSpecies';

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

const DetailPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  const { id } = useParams<Params>();

  const speciesQueryResult = useSpecies(id || '');
  // console.dir(speciesQueryResult);

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
      <PokemonInfo id={id} />
      <TabsWrapper>
        <Tabs
          tab={selectedTab}
          onClick={handleTabClick}
          color={{ name: 'green', url: '//' }}
        />
      </TabsWrapper>
      {selectedTab === 'about' && <About />}
      {selectedTab === 'stats' && <Stats />}
      {selectedTab === 'evolution' && <Evolution />}
    </Container>
  );
};

export default DetailPage;
