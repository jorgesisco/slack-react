import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Header({ runClick }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type='text' placeholder='Search...'></input>
          </Search>
        </SearchContainer>
        <HelpIcon />
        <Brightness4Icon onClick={runClick} />
      </Main>
      <UserContainer>
        <Name>Jorge Sisco</Name>
        <UserImage>
          <img src='https://i.imgur.com/6VBx3io.png'></img>
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text_sidebar_header};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow_header};
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  box-shadow: ${({ theme }) => theme.shadow_search_input};
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus {
    outline: none;
  }
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;
