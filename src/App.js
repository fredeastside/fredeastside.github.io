import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';

import './css/styles.styl';

class App extends Component {
  render() {
    console.log('render App');
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }

}

export default App;
