import React, { Component, Fragment } from 'react';
import Lights from './Lights.js';
import '../styles/Category.css';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return(
      <div className="category-column">
        <div className="category-content">
          <i className={"fa category-icon fa-" + (this.props.name === 'lights' ? "lightbulb" : "tv")}></i>
          <h2 className="category-title">{this.props.name.toUpperCase()}</h2>
        </div>
      </div>
    );
  }
}

export default Category;
