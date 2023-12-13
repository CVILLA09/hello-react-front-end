import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Dummy Greeting component for demonstration
function Greeting() {
  return <h2>Greeting Page</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          {/* Link to Greeting component */}
          <Link to="/greeting" className="App-link">Go to Greeting</Link>
        </header>

        {/* Route Definitions */}
        <Route path="/greeting" component={Greeting} />
      </div>
    </Router>
  );
}

export default App;
