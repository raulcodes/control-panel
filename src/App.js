import React, { Component } from 'react';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import Greeting from './components/Greeting/Greeting';
import Lights from './components/Lights/Lights.js';
import Tv from './components/TV/Tv.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="outer_container">
          <Hamburger pageWrapId={"menu_wrap"} outerContainerId={ "outer_container" } />
          <div id="menu_wrap" className={styles.content}>
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
