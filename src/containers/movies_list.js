import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchMovies } from './../actions';
import Pagination from './../components/pagination';
import Spinner from './../components/spinner';
import noImageAvailable from './../img/no_image_available.svg';

class MoviesList extends Component {

  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchMovies(
      this.props.apiAction,
      this.props.moviesList.page
    ), 1000);
  }

  changePage(page) {
    if (this.props.moviesList.page != page) {
        this.props.fetchMovies(this.props.apiAction, page);
        window.scrollTo(0, 0);
    }
  }

  renderMovie(movie) {
    const id = movie.id,
          title = movie.title,
          description = movie.overview ? movie.overview : 'Описание отсутствует.',
          imageClassName = "movies_list__item-image",
          dateRelease = movie.release_date,
          image = movie.poster_path
                  ? <img
                      className={imageClassName}
                      src={ `http://image.tmdb.org/t/p/w300${movie.poster_path}` }
                      alt={ title } />
                  : <img
                      className={imageClassName}
                      src={ noImageAvailable }
                      alt={ title } />;

    return (
      <div className="movies_list__item" key={ id }>
        <div className="movies_list__item-left">
          { image }
        </div>
        <div className="movies_list__item-right">
          <p className="movies_list__item-title">
            <Link to={{ pathname: `/movie/${id}` }} className="movies_list__item-title-link">{ title }</Link>
          </p>
          <p className="movies_list__item-description">{ description }</p>
          <p className="movies_list__item-date">Дата выхода: { dateRelease }</p>
        </div>
      </div>
    );
  }

  render() {
    console.log('render MoviesList');

    const movies = this.props.moviesList.items ? this.props.moviesList.items : [],
          totalPages = this.props.moviesList.totalPages,
          currentPage = this.props.moviesList.page;

    return (
      <div>
      { !movies.length
        ? <Spinner />
        : <div className="movies_list">{ movies.map( this.renderMovie) }
            <Pagination
              changePage={ this.changePage }
              currentPage={ currentPage }
              totalPages={ totalPages } />
          </div>
      }
      </div>
    )
  }
}

function mapStateToProps({ moviesList }) {
  return { moviesList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
