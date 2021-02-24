import styled from 'styled-components';
import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatInfo>
          <ChatTitle>
            <p>#Channel 1</p>
            <StarBorderIcon className='icon' />
          </ChatTitle>
          <ChatDeails>Company wide annoncements</ChatDeails>
        </ChatInfo>
        <Details>
          <p>Details</p>
          <InfoIcon className='icon2' />.
        </Details>
      </ChatHeader>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  background: ${({ theme }) => theme.chat};
  color: ${({ theme }) => theme.text_chat};
`;

const ChatHeader = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #d3d3d3;
`;

const ChatInfo = styled.div``;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  .icon {
    padding-left: 10px;
    width: 19px;
    height: 19px;
  }
`;

const ChatDeails = styled.div`
  color: gray;
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_chat};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon2 {
    padding-left: 5px;
  }
`;
