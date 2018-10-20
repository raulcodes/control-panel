import React, { Component } from 'react';
import styles from './Category.css';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return(
      <div className={styles.category_column}>
        <div className={styles.category_content}>
          <i className={`fa ${styles.category_icon} fa-${this.props.name === 'lights' ? "lightbulb" : "tv"}`}></i>
          <h2 className={styles.category_title}>{this.props.name.toUpperCase()}</h2>
        </div>
      </div>
    );
  }
}

export default Category;
