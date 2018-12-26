import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import requireAuth from './components/requireAuth';
import withErrorBoundary from './components/withErrorBoundary';
import logo from './logo.svg';
import './App.css';

const Home = React.lazy(() => import('./pages/home/containers/Home'));
const Buy = React.lazy(() => import('./pages/buy/containers/Buy'));
const Sell = React.lazy(() => import('./pages/sell/containers/Sell'));
const Login = React.lazy(() => import('./pages/login/containers/Login'));

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <img className="App-logo" src={logo} alt="logo" />
          <Route path="/login" exact children={({match}) => {
            return match ? null : (
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/buy">Buy</Link></li>
                  <li><Link to="/sell">Sell</Link></li>
                </ul>
              </nav>
            )
          }} />

          <React.Suspense fallback={<div>Loading...</div>}>
            <div className="content">
              <Route path="/" exact component={requireAuth(Home)} />
              <Route path="/buy" component={withErrorBoundary(requireAuth(Buy))} />
              <Route path="/sell" component={requireAuth(Sell)} />
              <Route path="/login" render={props => <Login {...props} />} />
            </div>
          </React.Suspense>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
