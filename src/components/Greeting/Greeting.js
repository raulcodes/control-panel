import React, { Component } from 'react';
import styles from './Greeting.css';

class Greeting extends Component {
  render() {
    return(
      <div className={styles.greeting}>
        <h1>Welcome Home,</h1>
        <br></br>
        <h1>{this.props.name}</h1></div>
    );
  }
}

export default Greeting;
