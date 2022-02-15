import styled from '@emotion/styled/macro';
import useEvolutionChain from 'hooks/useEvolutionChain';
import { Color } from 'types';
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
  const { data } = useEvolutionChain(url);

  console.dir(data);

  return (
    <Base>
      <Title color='green'>Evolution</Title>
      <List>
        <EvolutionStage />
      </List>
      <List>
        <EvolutionStage />
      </List>
    </Base>
  );
};

export default Evolution;
