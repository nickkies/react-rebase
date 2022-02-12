import styled from '@emotion/styled/macro';

const Base = styled.div``;

const Title = styled.h4``;

const List = styled.ul``;

const ListItem = styled.li``;

const Name = styled.div``;

const Amount = styled.div``;

const GaugeWrapper = styled.div``;

const Gauge = styled.div``;

const Stats: React.FC = () => {
  return (
    <Base>
      <Title>Base Stats</Title>
      <List>
        <ListItem>
          <Name>HP</Name>
          <Amount>50</Amount>
          <GaugeWrapper>
            <Gauge />
          </GaugeWrapper>
        </ListItem>
      </List>
    </Base>
  );
};

export default Stats;
