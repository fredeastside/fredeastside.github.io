import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ term: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    console.log(this.context);

    browserHistory.push({
      pathname: '/search',
      query: {
        query: this.state.term
      }
    });

    //this.setState({ term: '' });
  }

  render() {
    console.log('render SearchBar');
    return (
      <div className="search js-search">
        <form className="search__form" onSubmit={ this.onSubmitHandler }>
          <input
            onChange={ this.onChangeHandler }
            className="search__input"
            type="text"
            placeholder="Поиск" />
            <button type="submit" className="search__button"></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
