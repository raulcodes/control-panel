import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './App.css';
import Spotify from './components/Spotify.js';
import Lifx from './components/Lifx.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={12}>
                  <Spotify />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Col xs={6}>
                  <Lifx light_id={'d073d5223590'} id={1} room={'Kitchen'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={'d073d5225b74'} id={2} room={'Kitchen'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={'d073d525f46c'} id={1} room={'Living Room'}/>
                </Col>
                <Col xs={6}>
                  <Lifx light_id={'d073d52732af'} id={2} room={'Living Room'}/>
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
