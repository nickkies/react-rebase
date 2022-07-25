import styled from '@emotion/styled';

import { Footer, Header } from 'Components';
import LatestMovieSection from 'features/movie/Latest';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
