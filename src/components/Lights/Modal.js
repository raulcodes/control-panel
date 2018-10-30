import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import Switch from '@material-ui/core/Switch';
import styles from './Modal.css'

class LightModal extends Component {
  constructor(props) {
    super(props);

    this.toggleLight = this.toggleLight.bind(this);
  }

  toggleLight() {
    let url = "https://api.lifx.com/v1/lights/" + this.props.id + "/state";
    var data = JSON.stringify({
      "power": (this.props.toggle) ? "off" : "on"
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
      this.props.toggleLight()
    });
  }

  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.hideModal} className={styles.modal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Switch onChange={() => {this.props.toggleLight(this.props.toggle, this.props.id)}} checked={this.props.toggle} />
            <p>brightness: {this.props.brightness}</p>
          </Modal.Body>
      </Modal>
    );
  }
}

const mapStatetoProps = state => {
  let light = state.loadLight.find(o => o.id === state.modalVisibility.currentLight.lightId);
  if (light) {
    return {
      show: state.modalVisibility.visibility,
      id: light.id,
      name: light.name,
      brightness: light.brightness,
      toggle: light.toggle
    }
  }
  return {
    show: state.modalVisibility.visibility,
  }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
  hideModal: () => dispatch({ type: 'HIDE_MODAL' }),
  toggleLight: (toggle, id) => dispatch({
    type: 'LIGHT_FILL',
    meta: {
      type: 'light_api',
      url: `https://api.lifx.com/v1/lights/${id}/state`,
      method: "PUT",
      credentials: "include",
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_LIFX_SECRET,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "power": (toggle) ? "off" : "on" }),
      toggle: toggle
    }
  })
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(LightModal)

