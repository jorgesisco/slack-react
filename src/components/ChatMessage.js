import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src='https://randomuser.me/api/portraits/men/78.jpg' />
      </UserAvatar>
      <MessageContent>
        <Name>
          Jorge Sisco
          <span>24/02/2021 18:45</span>
        </Name>
        <Text>How is the challenge</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgba(97, 96, 97, 1);
    font-size: 13px;
  }
`;

const Text = styled.span``;
