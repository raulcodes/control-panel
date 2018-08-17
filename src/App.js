import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './App.css';
import Spotify from './components/Spotify.js';
import Lifx from './components/Lifx.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_one: process.env.REACT_APP_KITCHEN_ONE,
      kitchen_two: process.env.REACT_APPKITCHEN_TWO,
      living_room_one: process.env.REACT_APP_LIVING_ROOM_ONE,
      living_room_two: process.env.REACT_APP_LIVING_ROOM_TWO
    }
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <Spotify />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={6}>
                  <Lifx light_id={this.state.kitchen_one} id={1} room={'Kitchen'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={this.state.kitchen_two} id={2} room={'Kitchen'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={this.state.living_room_one} id={1} room={'Living Room'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={this.state.living_room_two} id={2} room={'Living Room'}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
