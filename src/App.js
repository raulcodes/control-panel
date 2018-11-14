import React, { Component } from 'react';
import styles from './App.css';
import Greeting from './components/Greeting/Greeting';
import Lights from './components/Lights/Lights.js';
import Tv from './components/TV/Tv.js';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {
  state = {
    slideValue: 0
  };

  handleChange = (event, value) => {
    this.setState({ slideValue: value });
  };

  handleChangeIndex = index => {
    this.setState({ slideValue: index });
  };

  render() {
    return (
        <div className="App">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.slideValue}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Home" />
              <Tab label="Lights" />
              <Tab label="TV" />
            </Tabs>
          </AppBar>
          <div className={styles.content}>
            <SwipeableViews
              index={this.state.slideValue}
              onChangeIndex={this.handleChangeIndex}
            >
              <Greeting name="Amigo" />
              <Lights />
              <Tv />
            </SwipeableViews>
          </div>
        </div>
    );
  }
}

export default App;
