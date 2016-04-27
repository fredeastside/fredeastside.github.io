import React, { Component } from 'react';
import shortid from 'shortid';

class Pagination extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return !!(this.props.totalPages === nextProps.totalPages) ? false : true;
  }

  onClickHandler(page) {
    this.props.moviesOnLoad(page);
  }

  renderPage(page) {

    let isActive = page == this.props.currentPage,
        className = isActive ? "pagination__item pagination__item-active" : "pagination__item";

    return (
      <div onClick={ () => this.onClickHandler(page) } className={ className } key={ shortid.generate() }>{ page }</div>
    );
  }

  renderPages() {
    let pagination = []; console.log(this.props.totalPages);

    for(let i = 1; i <= this.props.totalPages; i++) {
      pagination.push(this.renderPage(i));
    }

    return pagination;
  }

  render() {

    console.log('render Pagination');

    return (
      <div className="pagination">
        { this.renderPages() }
      </div>
    );
  }

}

export default Pagination;
