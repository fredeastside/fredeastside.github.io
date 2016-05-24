import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage, fetchMovies } from './../actions';

import ruFlag from './../img/ru.svg';
import enFlag from './../img/gb.svg';

class Language extends Component {

  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();

      const language = event.target.closest('li').dataset.lang;
      localStorage.setItem('language', language);
      //we should set current query in state and read it on language change
      this.props.fetchMovies('now_playing');
      console.log(this.props.url);
      this.props.changeLanguage(language);
  }

  render() {
    return(
      <div className="lang-switch">
        <ul className="lang-switch__list">
          <li data-lang="ru" className="lang-switch__list-item">
            <a href="#" onClick={ this.onClickHandler }>
              <img src={ ruFlag } alt="ru" />
            </a>
          </li>
          <li data-lang="en" className="lang-switch__list-item">
            <a href="#" onClick={ this.onClickHandler }>
              <img src={ enFlag } alt="en" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeLanguage,fetchMovies }, dispatch);
}

function mapStateToProps(url)
{
    return {url} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);
