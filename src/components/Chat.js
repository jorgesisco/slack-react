import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';

function Chat() {
  let { channelId } = useParams();

  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection('rooms')
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
    // console.log(channel.name);
  };

  const getMessages = () => {
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            # {channel && channel.name}
            <StarBorderIcon className='icon' />
          </ChannelName>
          <ChatInfo>Company wide annoncements</ChatInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: ${({ theme }) => theme.chat};
  color: ${({ theme }) => theme.text_chat};
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;

const Channel = styled.div``;

const ChannelName = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  font-weight: bold;

  .icon {
    padding-left: 10px;
    width: 19px;
    height: 19px;
  }
`;

const ChatInfo = styled.div`
  font-weight: 400;
  margin-top: 8px;
  font-size: 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.chatinfotext};
`;

const ChannelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #606060;
  .icon2 {
    padding-left: 5px;
  }
`;

const MessageContainer = styled.div``;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;
