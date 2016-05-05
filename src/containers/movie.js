import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovie } from './../actions';
import Spinner from './../components/spinner';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.props.fetchMovie(this.props.params.movieId);
  }

  render() {
    console.log('render Movie');
    console.log(this.props.movie);

    const title = this.props.movie.title,
          image = this.props.movie.backdrop_path;

    return (
      <div>
      { !Object.keys(this.props.movie).length
        ? <Spinner />
        : <div className="movie">
            <h1 className="movie__title">{ title }</h1>
            <img
                src={ `http://image.tmdb.org/t/p/w600${image}` }
                alt={ title } />
          </div>
      }
      </div>
    )
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
