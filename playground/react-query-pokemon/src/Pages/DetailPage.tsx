import styled from '@emotion/styled/macro';
import About from 'Components/About';
import Evolution from 'Components/Evolution';
import PokemonInfo from 'Components/PokemonInfo';
import Stats from 'Components/Stats';
import Tabs from 'Components/Tabs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

type Tab = 'about' | 'stats' | 'evolution';

const Container = styled.section``;

const TabsWrapper = styled.div``;

const DetailPage: React.FC = () => {
  const [selectedTab, SetSelectedTab] = useState<string>('about');
  const { id } = useParams<Params>();

  const handleTabClick = (tab: Tab) => {
    SetSelectedTab(tab);
  };

  return (
    <Container>
      id: {id}
      <br />
      <PokemonInfo />
      <TabsWrapper>
        <Tabs onClick={handleTabClick} />
      </TabsWrapper>
      {selectedTab === 'about' && <About />}
      {selectedTab === 'stats' && <Stats />}
      {selectedTab === 'evolution' && <Evolution />}
    </Container>
  );
};

export default DetailPage;
