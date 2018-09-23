import React, { Component, Fragment } from 'react';
import Lifx from './Lifx.js';
import '../styles/Lights.css'

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
      <Fragment>
      <div className="light-grid">
        <Lifx lightId={this.state.kitchen_one} />
        <Lifx lightId={this.state.kitchen_two} />
      </div>
      <div className="light-grid">
        <Lifx lightId={this.state.living_room_one} />
        <Lifx lightId={this.state.living_room_two} />
      </div>
      </Fragment>
    );
  }
}

export default Lights;
