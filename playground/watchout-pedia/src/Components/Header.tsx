import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';

const Base = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0 0;
  transition: background-color 200ms ease 0s;
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  &:not(:first-child) {
    margin: 0 0 0 24px;
  }
`;

const MenuButton = styled.button<{ active?: boolean }>`
  font-size: 18px;
  color: ${({ active }) => (active ? 'rgb(53, 53, 53)' : 'rgb(126, 126, 126)')};
  cursor: pointer;
  border: none;
  background: none;
`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s ease 0s;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class='primary'] {
    color: rgb(255, 47, 100);
  }
  > span:not(.primary) {
    color: #222;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.div``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%auto;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;

const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;

const Header: React.FC = () => {
  const handleKeyword = () => {};

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href='/'>
                <TextLogo>
                  <span className='primary'>WATCHOUT</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href='/'>
                <MenuButton>Moive</MenuButton>
              </Link>
              <Link href='/tv'>
                <MenuButton>Tv</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <AiOutlineSearch />
                      <SearchInput
                        placeholder='콘텐츠, 인물, 유저를 검색해보세요.'
                        onChange={handleKeyword}
                      />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
            </SearchMenu>
            <Menu>
              <SignIn>SignIn</SignIn>
            </Menu>
            <Menu>
              <SignUp>SignUp</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;
