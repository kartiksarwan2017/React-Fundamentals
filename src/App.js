import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Rahul';
  const loading = true;

  if(loading) {
    return <h1>loading!</h1>
  }
  return (
    // <React.Fragment>
    // <h1>Hey there!</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} 
          {/* Hello {new Date().toDateString()} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // </React.Fragment>
  );
}

export default App;
