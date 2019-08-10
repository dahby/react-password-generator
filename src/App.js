import React from 'react';
import PasswordGenerator from './password/passwordGenerator'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Password Generator</h1>
      </header>
      <PasswordGenerator/>
    </div>
  );
}

export default App;
