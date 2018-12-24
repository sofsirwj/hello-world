import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
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
      <ConnectedRouter history={this.props.history}>
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
      </ConnectedRouter>
    );
  }
}

export default App;
