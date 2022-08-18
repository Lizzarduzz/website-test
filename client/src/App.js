import AppNavbar from './components/AppNavbar';
import MainPage from './components/MainPage';

import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'

function App() {
  return (
    <div className="App">
        <AppNavbar />
        <Container>
          <MainPage />
        </Container>
    </div>
  );
}

export default App;
