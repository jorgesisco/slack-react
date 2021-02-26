import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login.js';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Theme';
import db from './firebase';
import { auth, provider } from './firebase';

function App() {
  const [theme, setTheme] = useState('light');

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
          {/* If there is no user (!user) here show login page in case there is user it will show the rest! */}
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Container>
              <Header signOut={signOut} user={user} runClick={toggleTheme} />
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path='/room/:channelId'>
                    <Chat />
                  </Route>
                  <Route path='/'>Select or Create Channel</Route>
                </Switch>
              </Main>
            </Container>
          )}
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
