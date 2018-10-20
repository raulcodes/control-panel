import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Category from '../Category/Category.js';
import styles from './styles.js';

class Hamburger extends Component {
  render () {
    return (
      <Menu styles={styles} pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
        <Link to="/lights">
          <Category name="lights" />
        </Link>
        <Link to="/tv">
          <Category name="tv" />
        </Link>
      </Menu>
    );
  }
}

export default Hamburger;