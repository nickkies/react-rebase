import styled from '@emotion/styled/macro';

const Base = styled.div``;

const Title = styled.h4``;

const List = styled.ul``;

const ListItem = styled.li``;

const Label = styled.span``;

const Description = styled.span``;

const Abilities: React.FC = () => {
  return (
    <Base>
      <Title>Abilities</Title>
      <List>
        <ListItem>
          <Label>Label</Label>
          <Description>Description</Description>
        </ListItem>
      </List>
    </Base>
  );
};

export default Abilities;
