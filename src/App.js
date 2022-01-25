import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import './App.css';
import Chat from './components/Chat';
import { useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';
import { useWindowMatches } from './hooks/useWindowMatches'

function App() {

  const [user, loading] = useAuthState(auth)
  const [showSideBar, setShowSideBar] = useState(true)
  const [isMobile] = useWindowMatches(500)

  useEffect(() => {
    setShowSideBar(!isMobile)
    
  }, [isMobile])

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://smartandroid.fr/wp-content/uploads/2020/09/envoyer-message-groupe2.png" alt="" />
          <Spinner 
            name="cube-grid"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
    <Router>
    {!user ? (
      <Login />
    ) : (
      <>
      <Header setShowSideBar={() => setShowSideBar(!showSideBar)} />
      <AppBody>
        <SideBar 
          isMobile={isMobile}
          setShowSideBar={() => setShowSideBar(!showSideBar)} 
          showSideBar={showSideBar} />
        <Routes>
          <Route 
            path="/" 
            exact 
            element={
              <Chat />
            } 
          />
        </Routes>
      </AppBody>
      </>
    )}

    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 20px
  }
`
