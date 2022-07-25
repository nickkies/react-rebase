import { Footer, Header } from 'Components';
import LatestMovieSection from 'features/movie/Latest';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <Footer />
    </div>
  );
};

export default MainPage;
