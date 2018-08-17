import React, { Component } from 'react';
import '../styles/Lifx.css';

class Lifx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
      active: ''
    }

    this.toggleLight = this.toggleLight.bind(this);

    let url = "https://api.lifx.com/v1/lights/" + this.props.light_id
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_LIFX_SECRET,
        "Content-Type": "application/json",
      }
    }).then((response) => {
      console.log(response.json());
      this.state.toggle = (response.power === 'on') ? true : false;
      this.state.active = response.connected;
    });
  }



  toggleLight() {
    let url = "https://api.lifx.com/v1/lights/" + this.props.light_id + "/state";
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
      <a href="#" onClick={this.toggleLight}>
        <div className={this.props.classId + " small-box"} id="Lifx">
          {/* <i className="far fa-lightbulb fa-10x" /> */}
          {/* <h3>{this.props.room + " " + this.props.id}</h3> */}
        </div>
      </a>
    );
  }
}

export default Lifx;
