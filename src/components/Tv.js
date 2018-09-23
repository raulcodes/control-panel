import React, { Component, Fragment } from 'react';
import Channel from './Roku_channel.js'
import '../styles/Tv.css'

class Tv extends Component {
  render() {
    return(
      <Fragment>
      <div className="tv-grid">
        <Channel channelId="" />
        <Channel channelId="" />
        <Channel channelId="" />
      </div>
      <div className="tv-grid">
        <Channel channelId="" />
        <Channel channelId="" />
        <Channel channelId="" />
      </div>
      <div className="tv-grid">
        <Channel channelId="" />
        <Channel channelId="" />
        <Channel channelId="" />
      </div>
      <div className="tv-grid">
        <Channel channelId="" />
        <Channel channelId="" />
        <Channel channelId="" />
      </div>
      </Fragment>
    );
  }
}

export default Tv;
