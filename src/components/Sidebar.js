import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData';
import { sidebarChannel } from '../data/SidebarData';
import { sidebarChannelItem } from '../data/SidebarData';
function Sidebar() {
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
        {sidebarChannel.map((item) => (
          <NewChannelContainer>
            {item.text}
            {item.icon}
          </NewChannelContainer>
        ))}
        <ChannelsList>
          {sidebarChannelItem.map((item) => (
            <Channel>{item.text}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: 1px solid #532753;
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
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  padding-top: 5px;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
