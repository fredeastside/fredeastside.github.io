import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (!this.state.term.length) {
      return;
    }

    const { router } = this.context;

    router.push({
      pathname: '/search',
      query: {
        query: this.state.term
      }
    });

    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="search js-search">
        <form className="search__form" onSubmit={ this.onSubmitHandler }>
          <input
            onChange={ this.onChangeHandler }
            className="search__input"
            type="text"
            value={ this.state.term }
            placeholder="Поиск" />
            <button type="submit" className="search__button"></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
