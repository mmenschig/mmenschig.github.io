import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home here</h1>;
const About = () => <h1>About Content here</h1>

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
      </div>
    </HashRouter>
  );
}

export default App;
