import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovie } from './../actions';
import Spinner from './../components/spinner';
import MovieImage from './../components/movie_image';

class Movie extends Component {

  constructor(props) {
    super(props);

    setTimeout(this.props.fetchMovie(this.props.params.movieId), 500);
    //this.props.fetchMovie(this.props.params.movieId);
  }

  render() {
    console.log('render Movie');

    const { title, overview } = this.props.movie,
          image = this.props.movie.backdrop_path,
          rating = this.props.movie.vote_average;

    return (
      <div>
      { !Object.keys(this.props.movie).length ? <Spinner />
        : <div className="movie">
            <h1 className="movie__title">{ title }</h1>
              <MovieImage
                wrapperClassName=""
                image={ image }
                resolution="1000"
                imageClassName=""
                title={ title } />
              <p>{ overview }</p>
              <p>Рейтинг: <span>{ rating }</span></p>
          </div>
      }
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
