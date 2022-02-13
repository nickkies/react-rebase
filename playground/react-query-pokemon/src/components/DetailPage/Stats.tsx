import styled from '@emotion/styled/macro';

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  & + & {
    margin-top: 12px;
  }
`;

const Name = styled.div`
  grid-column: span 4 / span 4;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
  color: #374151;
`;

const Amount = styled.div`
  grid-column: span 1 / span 1;
  border-radius: 12px;
  color: #374151;
`;

const GaugeWrapper = styled.div`
  grid-column: span 7 / span 7;
  border-radius: 12px;
  background-color: #e5e7eb;
`;

const Gauge = styled.div<{ percentage: number; color: string }>`
  background-color: ${({ color }) => color};
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  border-radius: 12px;
`;

const Stats: React.FC = () => {
  return (
    <Base>
      <Title color='green'>Base Stats</Title>
      <List>
        <ListItem>
          <Name>HP</Name>
          <Amount>50</Amount>
          <GaugeWrapper>
            <Gauge percentage={50} color='green' />
          </GaugeWrapper>
        </ListItem>
        <ListItem>
          <Name>Attack</Name>
          <Amount>80</Amount>
          <GaugeWrapper>
            <Gauge percentage={80} color='green' />
          </GaugeWrapper>
        </ListItem>
      </List>
    </Base>
  );
};

export default Stats;
