import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login.js';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Theme';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
          <Container>
            <Header runClick={toggleTheme} />
            <Main>
              <Sidebar />
              <Switch>
                <Route path='/room'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Login />
                </Route>
              </Switch>
            </Main>
          </Container>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
