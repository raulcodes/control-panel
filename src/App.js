import React, { Component } from 'react';
import './App.css';
import './styles/Hamburger.css';
import Hamburger from './components/Hamburger.js';
import Greeting from './components/Greeting.js';
import Lights from './components/Lights.js';
import Tv from './components/Tv.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <Hamburger pageWrapId={"menu-wrap"} outerContainerId={ "outer-container" } />
          <div id="menu-wrap" className="content">
            <Switch>
              <Route exact path="/" render={() => <Greeting name="Raul"/>} />
              <Route path="/lights" component={Lights} />
              <Route path="/tv" component={Tv} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
