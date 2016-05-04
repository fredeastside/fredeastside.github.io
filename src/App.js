import React, { Component } from 'react';

import MoviesList from './containers/movies_list';
import Menu from './components/menu';

import './css/styles.styl';

class App extends Component {

  render() {
    console.log('render App');
    return (
      <div>
        <Menu />
        <MoviesList />
      </div>
    );
  }

}

export default App;
