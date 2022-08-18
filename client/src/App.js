import AppNavbar from './components/AppNavbar';
import MainPage from './components/MainPage';

import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <AppNavbar />
        <MainPage />
    </div>
  );
}

export default App;
