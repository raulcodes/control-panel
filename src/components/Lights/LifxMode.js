import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import styles from './Lifx.css';

class LifxMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      active: 'loading...',
      brightness: 0.0,
      label: '',
      kitchen_one: process.env.REACT_APP_KITCHEN_ONE,
      kitchen_two: process.env.REACT_APP_KITCHEN_TWO,
      living_room_one: process.env.REACT_APP_LIVING_ROOM_ONE,
      living_room_two: process.env.REACT_APP_LIVING_ROOM_TWO,
    }

    this.lightColorChange = this.lightColorChange.bind(this);
  }

  lightColorChange() {
    let color1 = (this.props.mode === 'tyler') ? 'purple' : 'white';
    let color2 = (this.props.mode === 'tyler') ? 'blue' : 'white';
    let url = "https://api.lifx.com/v1/lights/states";
    var data = JSON.stringify({
      "states": [
        {
          "selector": this.state.living_room_one,
          "color": color1
        },
        {
          "selector": this.state.living_room_two,
          "color": color1
        },
        {
          "selector": this.state.kitchen_one,
          "color": color2
        },
        {
          "selector": this.state.kitchen_two,
          "color": color2
        },
      ]
    });

    fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_LIFX_SECRET,
        "Content-Type": "application/json",
      },
      body: data,
    }).then((response) => {
      // console.log(response);
      // this.setState({ toggle: !this.state.toggle });
    });
  }

  render() {
    return(
      <div className={styles.small_box} onClick={this.lightColorChange}>
        <div className={styles.light_content_container}>
          <div className={styles.light_content}>
            <Circle percent={Math.floor(this.state.brightness*100)} strokeWidth="10" strokeColor="#D3D3D3"
              trailWidth="0" className={styles.light_brightness_chart} />
            {/* <h3 id="light-status">{this.state.toggle ? 'On' : 'Off'}</h3> */}
            <h3>{this.props.mode}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LifxMode;
