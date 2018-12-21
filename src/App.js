import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home/containers/Home';
import Buy from './pages/buy/containers/Buy';
import Sell from './pages/sell/components/Sell';
import Login from './pages/login/containers/Login';
import requireAuth from './components/requireAuth';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/stock">
        <div className="App">
          <img className="App-logo" src={logo} alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/sell">Sell</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Route path="/" exact component={requireAuth(Home)} />
            <Route path="/buy" component={requireAuth(Buy)} />
            <Route path="/sell" component={requireAuth(Sell)} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
