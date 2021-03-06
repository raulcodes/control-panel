import React, { Component } from 'react';
import styles from './Roku_Channel.css'

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roku_ip: process.env.REACT_APP_ROKU_IP_AND_PORT,
    }

    this.handleChannelClick = this.handleChannelClick.bind(this);
  }

  handleChannelClick() {
    let url = 'http://' + this.state.roku_ip + '/launch/' + this.props.channelId

    fetch(url, {
      method: 'POST',
      mode: 'no-cors'
    }).then((response) => {
      console.log('successful');
    });
  }

  render() {
    return (
      <div className={styles.channel_btn} onClick={this.handleChannelClick}>
        {/* <i className={"fa fa-" + this.props.name}></i> */}
      </div>
    );
  }
}

export default Channel;
