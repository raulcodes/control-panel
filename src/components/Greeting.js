import React, { Component } from 'react';
import '../styles/Greeting.css';

class Greeting extends Component {
  render() {
    return(
      <div className="greeting">
        <h1>Welcome Home,</h1>
        <br></br>
        <h1>{this.props.name}</h1></div>
    );
  }
}

export default Greeting;
