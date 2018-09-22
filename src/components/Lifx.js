import React, { Component } from 'react';
import '../styles/Lifx.css';

class Lifx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
      active: 'loading...'
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
    }).then((response) => {
      console.log(response.json());
      this.setState({ active: response.connected, toggle: (response.power === 'on') ? true : false });
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
      <div onClick={this.toggleLight}>
        <div className={this.props.classId + " small-box"} id="Lifx">
          <p>Lights</p>
          <h3>{this.state.active}</h3>
        </div>
      </div>
    );
  }
}

export default Lifx;
