import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './Greeting';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <Link to="/greeting" className="App-link">Go to Greeting</Link>
        </header>

        <Route path="/greeting" component={Greeting} />
      </div>
    </Router>
  );
}

export default App;
