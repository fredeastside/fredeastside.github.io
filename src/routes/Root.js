import React, { Component, PropTypes } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/styles.styl';

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }

}

export default Root;
