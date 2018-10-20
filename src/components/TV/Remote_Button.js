import React, { Component } from 'react';
import styles from './Roku_Channel.css'

class RemoteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roku_ip: process.env.REACT_APP_ROKU_IP_AND_PORT,
    }

    this.handleChannelClick = this.handleChannelClick.bind(this);
  }

  handleChannelClick() {
    let url = 'http://' + this.state.roku_ip + '/keypress/' + this.props.name

    fetch(url, {
      method: 'POST',
      mode: 'no-cors'
    }).then((response) => {
      console.log('successful');
    });
  }

  render() {
    return(
      <div className={styles.channel_btn} onClick={this.handleChannelClick}>
        <i className={"fa fa-" + this.props.icon}></i>
      </div>
    );
  }

}

export default RemoteButton;
