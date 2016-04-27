import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';

import MoviesList from './containers/movies_list';
import Menu from './components/menu';

const style = require('./css/styles.styl');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { page: 1, totalPages: 0 };

    this.moviesOnLoad = this.moviesOnLoad.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchMovies(this.state.page), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  moviesOnLoad(page) {
    this.props.fetchMovies(page);
  }

  render() {
    console.log('render App');
    return (
      <div>
        <Menu />
        <MoviesList currentPage={ this.state.page } moviesOnLoad={ this.moviesOnLoad } />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
