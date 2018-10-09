import React, { Component } from 'react';
import Channel from './Roku_channel.js'
import RemoteButton from './Remote_Button.js'
import '../styles/Tv.css'

const buttons = [
  'Back', 'Up', 'Home',
  'Left', 'Select', 'Right',
  'InstantReplay', 'Down', 'Info',
]

const channels = [
  { name: 'Netflix', id: '12' },
  { name: 'Hulu', id: '2285' },
  { name: 'prime', id: '13' },
]

class Tv extends Component {
  render() {
    return(
      <div className="tv-grid">
        {buttons.map(btn => {
          return <RemoteButton name={btn} />
        })}
        {channels.map(c => {
          return <Channel name={c.name} channelId={c.id} />
        })}
      </div>
    );
  }
}

export default Tv;
