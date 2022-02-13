import styled from '@emotion/styled/macro';

const Base = styled.div`
  margin-top: 32px;
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
  li + li {
    margin-top: 12px;
  }
`;

const ListItem = styled.li`
  display: flex;
`;

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`;

const Abilities: React.FC = () => {
  return (
    <Base>
      <Title color='green'>Abilities</Title>
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
