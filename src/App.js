import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';

import MoviesList from './containers/movies_list';
import Menu from './components/menu';

const style = require('./assets/css/styles.styl');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { page: 1 };
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchMovies(this.state.page), 1000);
  }

  render() {
    return (
      <div>
        <Menu />
        <MoviesList />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
