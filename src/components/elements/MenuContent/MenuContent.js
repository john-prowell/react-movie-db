import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MenuContent.css';

class MenuContent extends Component {
  constructor(props) {
    super(props);

    this.items = ['Popular', 'Trending'];
    // for (let i = 1; i <= 5; i++) {
    //   this.items.push(i);
    // }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => (
          <div className="menu-item" key={i}>
            <Link to="/"              
              onClick={this.props.closeCallback}
            >
              {i}
            </Link>
          </div>
        ))}

        <p className="hint">
          Click outside the menu to close it, or swipe it closed on touch device
        </p>
      </div>
    );
  }
}

MenuContent.PropTypes = {
  closeCallback: PropTypes.func.isRequired
};

export default MenuContent;
