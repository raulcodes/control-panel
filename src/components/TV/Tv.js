import React, { Component, Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Channel from './Roku_Channel.js'
import RemoteButton from './Remote_Button.js'
import styles from './Tv.css'

const buttons = [
  { name: 'VolumeMute', icon: 'volume-off' },
  { name: 'VolumeDown', icon: 'volume-down' },
  { name: 'VolumeUp', icon: 'volume-up' },
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
  state = {
    tabValue: 0
  }

  handleTab = (event, value) => {
    this.setState({ tabValue: value });
  };

  render() {
    const { tabValue } = this.state;

    return(
      <Fragment>
        <Tabs
          value={tabValue}
          onChange={this.handleTab}
          centered
        >
          <Tab label="Remote" />
          <Tab label="Channels" />
        </Tabs>
        <div className={styles.tv_grid}>
          {buttons.map(btn => {
              return <RemoteButton name={btn.name} icon={btn.icon} />
          })}
          {channels.map(c => {
              return <Channel name={c.name} channelId={c.id} />
          })}
        </div>
      </Fragment>
    );
  }
}

export default Tv;
