import React, { Component } from 'react';
import Channel from './Roku_Channel.js'
import RemoteButton from './Remote_Button.js'
import styles from './Tv.css'

const buttons = [
  { name: 'Back', icon: 'arrow-left' },
  { name: 'Up', icon: 'chevron-up' },
  { name: 'Home', icon: 'home' },
  { name: 'Left', icon: 'chevron-left' },
  { name: 'Select', icon: 'circle' },
  { name: 'Right', icon: 'chevron-right' },
  { name: 'InstantReplay', icon: 'undo' },
  { name: 'Down', icon: 'chevron-down' },
  { name: 'Info', icon: 'star' }
]

const channels = [
  { name: 'Netflix', id: '12' },
  { name: 'Hulu', id: '2285' },
  { name: 'prime', id: '13' },
]

class Tv extends Component {
  render() {
    return(
      <div className={styles.tv_grid}>
        {buttons.map(btn => {
          return <RemoteButton name={btn.name} icon={btn.icon} />
        })}
        {channels.map(c => {
          return <Channel name={c.name} channelId={c.id} />
        })}
      </div>
    );
  }
}

export default Tv;
