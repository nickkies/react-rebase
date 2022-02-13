import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  PokemonInfo,
  Tabs,
  About,
  Stats,
  Evolution,
} from 'components/DetailPage';

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
  const [selectedTab, SetSelectedTab] = useState<Tab>('about');

  const { id } = useParams<Params>();

  const handleTabClick = (tab: Tab) => {
    SetSelectedTab(tab);
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
