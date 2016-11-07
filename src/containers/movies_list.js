import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { get } from 'immutable';


import Pagination from 'react-js-pagination';
import { fetchMovies } from './../actions';
import Spinner from './../components/spinner';
import MovieImage from './../components/movie_image';

class MoviesList extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchMovies, params: { method }, location: { query: { query, page } } } = this.props;

    fetchMovies(method, page, query);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchMovies, movies, params: { method }, location: { query: { query, page } } } = this.props;

    if (page != nextProps.location.query.page
       || movies.get('language') !== nextProps.movies.get('language')
       || method != nextProps.params.method
       || query != nextProps.location.query.query
     ) {
      fetchMovies(nextProps.params.method, nextProps.location.query.page, nextProps.location.query.query);
    }

  }

  renderItem(movie) {

    const { id, title, release_date, poster_path } = movie;
    const description = movie.overview ? movie.overview : 'Описание отсутствует.';

    return (
      <div className="movies_list__item" key={ id }>
        <MovieImage
          wrapperClassName="movies_list__item-left"
          image={ poster_path }
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
          <p className="movies_list__item-date">Дата выхода: { release_date }</p>
        </div>
      </div>
    );
  }

  renderList() {
    const { movies } = this.props,
      items = movies.get('items');

    if (!items.length) {
      return <p>Данные отсутствуют.</p>;
    }

    return items.map(this.renderItem);
  }

  handlePageChange = (page) => {
    const { location } = this.props,
      { router } = this.context;

      router.push({ ...location, query: { ...location.query, page } })
  }

  render() {
    const { movies } = this.props,
      loading = movies.get('loading'),
      totalPages = movies.get('totalPages'),
      total = movies.get('total'),
      page = movies.get('page');

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="movies_list">
        { this.renderList() }
        <Pagination
          activePage={ page }
          itemsCountPerPage={ 20 }
          totalItemsCount={ total }
          pageRangeDisplayed={ 10 }
          onChange={ this.handlePageChange }
        />
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
