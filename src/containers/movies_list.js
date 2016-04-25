import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {

  renderMovie(movie) {
    const id = movie.id,
          title = movie.title,
          description = movie.overview,
          image = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;//http://image.tmdb.org/t/p/w300/6bCplVkhowCjTHXWv49UjRPn0eK.jpg

    return (
      <div className="movies_list__item" key={ id }>
        <div className="movies_list__item-left">
          <img className="movies_list__item-image" src={ image } alt={ title } />
        </div>
        <div className="movies_list__item-right">
          <p className="movies_list__item-title">{ title }</p>
          <p className="movies_list__item-description">{ description }</p>
        </div>
      </div>
    );
  }

  render() {
    const movies = this.props.movies;

    return (
      <div className="movies_list">
      { !movies.length
        ? <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        : movies.map( this.renderMovie)
      }
      </div>
    )
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MoviesList);
