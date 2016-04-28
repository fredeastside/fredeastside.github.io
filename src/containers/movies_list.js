import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies, changePage } from './../actions';

import Pagination from './../components/pagination';

const noImageAvailable = require('./../img/no_image_available.svg');

class MoviesList extends Component {

  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchMovies(this.props.response.page), 1000);
  }

  changePage(page) {
    if (this.props.response.page != page) {
        this.props.fetchMovies(page);
    }
  }

  renderMovie(movie) {
    const id = movie.id,
          title = movie.title,
          description = movie.overview,
          imageClassName = "movies_list__item-image",
          image = movie.poster_path
                  ? <img className={imageClassName} src={ `http://image.tmdb.org/t/p/w300${movie.poster_path}` } alt={ title } />
                  : <img className={imageClassName} src={ noImageAvailable } alt={ title } />;//

    return (
      <div className="movies_list__item" key={ id }>
        <div className="movies_list__item-left">
          { image }
        </div>
        <div className="movies_list__item-right">
          <p className="movies_list__item-title">{ title }</p>
          <p className="movies_list__item-description">{ description }</p>
        </div>
      </div>
    );
  }

  render() {
    console.log('render MoviesList');
    const movies = this.props.response.items ? this.props.response.items : [],
          totalPages = this.props.response.totalPages,
          currentPage = this.props.response.page;

    return (
      <div>
      { !movies.length
        ? <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        : <div className="movies_list">{ movies.map( this.renderMovie) }
            <Pagination changePage={ this.changePage } currentPage={ currentPage } totalPages={ totalPages } />
          </div>
      }
      </div>
    )
  }
}

function mapStateToProps({ response }) {
  return { response };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, changePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
