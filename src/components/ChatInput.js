import React, { useEffect } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
  const changeButtonColor = () => {
    if (document.getElementById('input_msg').value === '') {
      document.getElementById('send-button').style.background = 'white';
    } else {
      document.getElementById('send-button').style.background = '#35785C';
    }
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onKeyUp={changeButtonColor}
            id='input_msg'
            type='text'
            placeholder='Message Here...'
          ></input>
          <SendButton id='send-button'>
            <Send />
          </SendButton>
        </form>
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
  border-radius: 10px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      background: ${({ theme }) => theme.input_background};
      border: none;
      font-size: 13px;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  background: white;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;
