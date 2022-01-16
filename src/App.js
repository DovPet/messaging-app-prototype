import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <AppBody>
      <SideBar />
      <Routes>
        {/* <Route path="/" exact element={} /> */}
      </Routes>
    </AppBody>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
