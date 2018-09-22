import React, { Component } from 'react';
import Lifx from './Lifx.js';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_one: process.env.REACT_APP_KITCHEN_ONE,
      kitchen_two: process.env.REACT_APP_KITCHEN_TWO,
      living_room_one: process.env.REACT_APP_LIVING_ROOM_ONE,
      living_room_two: process.env.REACT_APP_LIVING_ROOM_TWO
    }
  }

  render() {
    return (
      <div className="large-box" id="Map">
        <Lifx light_id={this.state.kitchen_one} id={1} classId={'kitchen-one'} room={'Kitchen'}/>
        <Lifx light_id={this.state.kitchen_two} id={2} classId={'kitchen-two'} room={'Kitchen'}/>
        <Lifx light_id={this.state.living_room_one} id={1} classId={'living-room-one'} room={'Living Room'}/>
        <Lifx light_id={this.state.living_room_two} id={2} classId={'living-room-two'} room={'Living Room'}/>
      </div>
    );
  }
}

export default Map;
