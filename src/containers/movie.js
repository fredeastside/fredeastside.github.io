import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDisqusThread from 'react-disqus-thread';

import { fetchMovie } from './../actions';
import Spinner from './../components/spinner';
import MovieImage from './../components/movie_image';

class Movie extends Component {

  constructor(props) {
    super(props);

    //setTimeout(this.props.fetchMovie(this.props.params.movieId), 500);
    this.props.fetchMovie(this.props.params.movieId);
  }

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    const { id, title, overview } = this.props.movie,
          image = this.props.movie.backdrop_path,
          rating = this.props.movie.vote_average;

    return (
      <div>
      { !Object.keys(this.props.movie).length ? <Spinner />
        : <div className="movie">
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
                  url={ `localhost:3000` }
                  category_id="123456"
                  onNewComment={ this.handleNewComment } />
              </div>
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
