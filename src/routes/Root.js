import React, { Component, PropTypes } from 'react';
import ScrollToTop from 'react-scroll-up';

import Header from '../components/header';
import Footer from '../components/footer';

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          { this.props.children }
        </div>
        <Footer />
        <ScrollToTop showUnder={ 250 }>
          <div className="to-top-arrow"></div>
        </ScrollToTop>
      </div>
    );
  }

}

export default Root;
