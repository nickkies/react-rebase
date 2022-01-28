import Skeleton from './components/skeleton/Skeleton';
import styled from '@emotion/styled/macro';

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 24px;
`;

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src='https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80' />
      </ImageWrapper>
      <Info>
        <Title></Title>
        <Description>testTest테스트</Description>
      </Info>
    </Container>
  );
};

function App() {
  return (
    <Base>
      {Array.from({ length: 25 }).map((_, idx) => (
        <Item key={idx} />
      ))}
    </Base>
  );
}

export default App;
