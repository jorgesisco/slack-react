import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import CropFreeIcon from '@material-ui/icons/CropFree';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput('');
  };

  const changeButtonColor = () => {
    if (document.getElementById('input_msg').value === '') {
      document.getElementById('send-button').style.background = '';
    } else {
      document.getElementById('send-button').style.background = '#35785C';
    }
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={changeButtonColor}
            id='input_msg'
            value={input}
            type='text'
            placeholder='Message Here...'
          ></input>
        </form>
        <ChatTools>
          <Left_container>
            <FlashOnIcon />
            <FormatBoldIcon />
            <FormatItalicIcon />
            <FormatStrikethroughIcon />
            <CodeIcon />
            <LinkIcon />
            <FormatListNumberedIcon />
            <FormatListBulletedIcon />
            <ViewHeadlineIcon />
            <CropFreeIcon />
          </Left_container>

          <Right_container>
            <FontDownloadIcon />
            <AlternateEmailIcon />
            <EmojiEmotionsIcon />
            <AttachFileIcon />
            <SendButton type='submit' onClick={send} id='send-button'>
              <Send />
            </SendButton>
          </Right_container>
        </ChatTools>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  padding-bottom: 10px;
  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #8d8d8e;
    margin-bottom: 10px;
    /* padding-bottom: 5px; */
    input {
      flex: 1;
      background: ${({ theme }) => theme.input_background};
      border: none;
      font-size: 16px;
      color: ${({ theme }) => theme.text_chat};
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  border: none;
    width: 18px;
    display: flex;
    padding-left: 10px;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;

const ChatTools = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left_container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    padding-left: 11px;
  }
`;

const Right_container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    padding-right: 11px;
  }
`;
