import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDisqusThread from 'react-disqus-thread';
import { get } from 'immutable';

import { fetchMovieById } from './../actions';
import Spinner from './../components/spinner';
import MovieImage from './../components/movie_image';

class Movie extends Component {

  componentDidMount() {
    const { fetchMovieById, params: { id } } = this.props;
    fetchMovieById(id);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchMovieById, movie, params: { id } } = this.props;

    if (movie.get('language') !== nextProps.movie.get('language')) {
      fetchMovieById(id);
    }
  }

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {

    const { movie } = this.props,
      loading = movie.get('loading');

    if (loading) {
      return <Spinner />;
    }

    const { id, title, overview, backdrop_path, vote_average } = movie.get('entity'),
          image = backdrop_path,
          rating = vote_average;

    return (
      <div className="movie">
          <h1 className="movie__title">{ title }</h1>
            <MovieImage
              wrapperClassName="movie__image"
              image={ image }
              resolution="1000"
              imageClassName=""
              title={ title } />
            <div className="movie__description">
              <p>{ overview }</p>
            </div>
            <div className="movie__rating">
              <p>Рейтинг: <span className="movie__rating-mark">{ rating }</span></p>
            </div>
            <div className="movie__comments">
              <ReactDisqusThread
                shortname="fredrsf"
                identifier={ String(id) }
                title={ title }
                url={ `http://fredeastside.github.io/movie/${id}` }
                category_id=''
                onNewComment={ this.handleNewComment } />
            </div>
        </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
