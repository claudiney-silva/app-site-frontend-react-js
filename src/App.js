import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Counter } from './features/counter/Counter';

import Home from './app/views/Home';
import About from './app/views/About';
import Topics from './app/views/Topics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sample App</h1>
      </header>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>            
          </ul>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/counter">
              <Counter /> 
            </Route>                       
            <Route path="/">
              <Home />
            </Route>            
          </Switch>
        </div>
      </Router>        
    </div>
  );
}

export default App;
