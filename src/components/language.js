import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage } from './../actions';

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
  return bindActionCreators({ changeLanguage }, dispatch);
}

export default connect(null, mapDispatchToProps)(Language);
