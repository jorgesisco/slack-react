import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData';
import { sidebarChannel } from '../data/SidebarData';
import { sidebarChannelItem } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar(props) {
  const addChannel = () => {
    const promptName = prompt('Enter channel name');
    if (promptName) {
      db.collection('rooms').add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon className='plus-icon' onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel># {item.name}</Channel>
          ))}
        </ChannelsList>
        <ThemeButton></ThemeButton>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const ThemeButton = styled.div``;

const Container = styled.div`
  background: ${({ theme }) => theme.header};
`;

const WorkspaceContainer = styled.div`
  color: ${({ theme }) => theme.text_sidebar_header};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: ${({ theme }) => theme.shadow};
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: ${({ theme }) => theme.text_sidebar_header};
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  padding-top: 5px;
  :hover {
    background: ${({ theme }) => theme.hover_color};
  }
`;

const ChannelsContainer = styled.div`
  color: ${({ theme }) => theme.text_sidebar_header};
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;

  .plus-icon {
    cursor: pointer;
  }
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.hover_color};
  }
`;
