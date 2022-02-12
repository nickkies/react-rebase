import styled from '@emotion/styled/macro';

interface Props {
  onClick: (tab: 'about' | 'stats' | 'evolution') => void;
}

const List = styled.ul``;

const ListItem = styled.li``;

const TabButton = styled.button``;

const Tabs: React.FC<Props> = ({ onClick }) => {
  return (
    <List>
      <ListItem onClick={() => onClick('about')}>
        <TabButton>About</TabButton>
      </ListItem>
      <ListItem onClick={() => onClick('stats')}>
        <TabButton>Stats</TabButton>
      </ListItem>
      <ListItem onClick={() => onClick('evolution')}>
        <TabButton>Evolution</TabButton>
      </ListItem>
    </List>
  );
};

export default Tabs;
