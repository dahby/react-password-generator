import React from 'react';
// import { useMediaQuery } from '@material-ui/core';
import PasswordGenerator from './password/passwordGenerator'
import Header from './header/header'
import './App.css';

function App() {


  return (
    <div className="App">
      <Header/>
      <PasswordGenerator/>
    </div>
  );
}

export default App;
