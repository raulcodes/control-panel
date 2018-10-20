import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import styles from './Lifx.css';

class Lifx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      active: 'loading...',
      brightness: 0.0,
      label: ''
    }

    this.toggleLight = this.toggleLight.bind(this);
  }

  componentDidMount() {
    let url = "https://api.lifx.com/v1/lights/" + this.props.lightId
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_LIFX_SECRET,
        "Content-Type": "application/json",
      }
    }).then((response) => response.json())
      .then((data) => {
      this.setState({ active: data[0].connected,
        toggle: (data[0].power === 'on') ? true : false,
        brightness: data[0].brightness,
        label: data[0].label });
      console.log(data[0].power)
    });
  }

  toggleLight() {
    let url = "https://api.lifx.com/v1/lights/" + this.props.lightId + "/state";
    var data = JSON.stringify({
      "power": (this.state.toggle) ? "off" : "on"
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
      this.setState({ toggle: !this.state.toggle });
    });
  }

  render() {
    return (
      <div className={styles.small_box} onClick={this.toggleLight}>
        <div className={styles.light_content_container}>
          <div className={styles.light_content}>
            <Circle percent={Math.floor(this.state.brightness*100)} strokeWidth="10" strokeColor="#D3D3D3"
              trailWidth="0" id={styles.light_brightness_chart} />
            <h2 className={styles.light_status}>{this.state.toggle ? 'On' : 'Off'}</h2>
            {/* <h3>{this.state.label}</h3> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Lifx;