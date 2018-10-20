import React, { Component } from 'react';
import Lifx from './Lifx.js';
import LifxMode from './LifxMode.js';
import styles from './Lights.css'

class Lights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_one: process.env.REACT_APP_KITCHEN_ONE,
      kitchen_two: process.env.REACT_APP_KITCHEN_TWO,
      living_room_one: process.env.REACT_APP_LIVING_ROOM_ONE,
      living_room_two: process.env.REACT_APP_LIVING_ROOM_TWO,
    }
  }

  render() {
    return(
      <div className={styles.light_grid}>
        <Lifx lightId={this.state.kitchen_one} />
        <Lifx lightId={this.state.kitchen_two} />
        <Lifx lightId={this.state.living_room_one} />
        <Lifx lightId={this.state.living_room_two} />
        <LifxMode mode={'tyler'} />
        <LifxMode mode={'home'} />
      </div>
    );
  }
}

export default Lights;
