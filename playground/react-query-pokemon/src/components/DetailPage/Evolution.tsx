import styled from '@emotion/styled/macro';
import { EvolutionStage } from '.';

const Base = styled.div``;

const Title = styled.h4``;

const List = styled.ul``;

const Evolution: React.FC = () => {
  return (
    <Base>
      <Title>Evolution</Title>
      <List>
        <EvolutionStage />
      </List>
    </Base>
  );
};

export default Evolution;
