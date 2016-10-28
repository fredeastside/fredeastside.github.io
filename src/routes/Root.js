import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/styles.styl';

class Root extends Component {
  render() {
    console.log(123)
    return (
      <div>
        <div className="wrapper">
          { this.props.children }
        </div>
      </div>
    );
  }

}

export default Root;
