import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import Category from './Category.js';
import { Link } from 'react-router-dom'


class Hamburger extends Component {
  render () {
    return (
      <Menu pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
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
