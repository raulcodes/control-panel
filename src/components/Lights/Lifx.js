import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Circle } from 'rc-progress';
import styles from './Lifx.css';

class Lifx extends Component {
  componentDidMount() {
    this.props.loadLight()
  }

  render() {
    return (
      <div className={styles.small_box} onClick={this.props.showModal}>
        <div className={styles.light_content_container}>
          <div className={styles.light_content}>
            <Circle percent={Math.floor(this.props.brightness*100)} strokeWidth="10" strokeColor="#D3D3D3"
              trailWidth="0" id={styles.light_brightness_chart} />
            <h2 className={styles.light_status}>{this.props.toggle ? 'On' : 'Off'}</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  let light = state.loadLight.find(o => o.id === ownprops.lightId);
  return {
    name: light.name,
    id: light.id,
    brightness: light.brightness,
    toggle: light.toggle
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    loadLight: () => dispatch({
      type: 'LOAD_LIGHT',
      payload: ownprops,
      meta: {
        type: 'light_api',
        url: `https://api.lifx.com/v1/lights/${ownprops.lightId}`,
        method: "GET",
        credentials: "include",
        headers: {
          "Authorization": "Bearer " + process.env.REACT_APP_LIFX_SECRET,
          "Content-Type": "application/json",
        }
      }
    }),
    showModal: () => dispatch({
      type: 'SHOW_MODAL',
      payload: ownprops
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lifx)
