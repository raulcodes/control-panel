import React, { Component } from 'react';
import Lifx from './Lifx.js';
import LifxMode from './LifxMode.js';
import LightModal from './Modal.js';
import lights from '../../data/light_data.js'
import styles from './Lights.css'

class Lights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lights: lights
    }
  }

  render() {
    return(
      <div className={styles.light_grid}>
        {this.state.lights.map((light, i) =>
          <Lifx key={i} lightId={light.id} name={light.name} />
        )}
        <LifxMode mode={'tyler'} />
        <LifxMode mode={'home'} />
        <LightModal />
      </div>
    );
  }
}

export default Lights;
