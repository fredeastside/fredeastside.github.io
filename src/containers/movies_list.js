import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchMovies } from './../actions';
import Pagination from './../components/pagination';
import Spinner from './../components/spinner';
import MovieImage from './../components/movie_image';

class MoviesList extends Component {

  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    /*this.props.fetchMovies(
      this.props.apiAction,
      this.props.moviesList.page,
      this.getSearchQuery()
    );*/
    setTimeout(() => this.props.fetchMovies(
      this.props.apiAction,
      this.props.moviesList.page,
      this.getSearchQuery()
    ), 500);
  }

  changePage(page) {
    if (this.props.moviesList.page != page) {
        this.props.fetchMovies(
            this.props.apiAction,
            page,
            this.getSearchQuery()
        );
        window.scrollTo(0, 0);
    }
  }

  getSearchQuery() {
    return this.props.query ? this.props.query.query : null;
  }

  renderMovie(movie) {
    const id = movie.id,
          title = movie.title,
          description = movie.overview ? movie.overview : 'Описание отсутствует.',
          dateRelease = movie.release_date,
          image = movie.poster_path;

    return (
      <div className="movies_list__item" key={ id }>
        <MovieImage
          wrapperClassName="movies_list__item-left"
          image={ image }
          resolution="300"
          imageClassName="movies_list__item-image"
          title={ title } />
        <div className="movies_list__item-right">
          <p className="movies_list__item-title">
            <Link
              to={{ pathname: `/movie/${id}` }}
              className="movies_list__item-title-link">{ title }</Link>
          </p>
          <p className="movies_list__item-description">{ description }</p>
          <p className="movies_list__item-date">Дата выхода: { dateRelease }</p>
        </div>
      </div>
    );
  }

  render() {

    const movies = this.props.moviesList.items ? this.props.moviesList.items : [],
          totalPages = this.props.moviesList.totalPages,
          currentPage = this.props.moviesList.page;

    return (
      <div>
      { !movies.length ? <Spinner />
        : <div className="movies_list">{ movies.map( this.renderMovie) }
            <Pagination
              changePage={ this.changePage }
              currentPage={ currentPage }
              totalPages={ totalPages } />
          </div>
      }
      </div>
    );
  }
}

function mapStateToProps({ moviesList }) {
  return { moviesList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
