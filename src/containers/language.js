import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage } from './../actions';

import ruFlag from '../../img/ru.svg';
import enFlag from '../../img/gb.svg';

class Language extends Component {

  onClickHandler = (e, lang) => {
    e.preventDefault();

    const { changeLanguage } = this.props;

    changeLanguage(lang);
  }

  render() {
    return(
      <div className="lang-switch">
        <ul className="lang-switch__list">
          <li className="lang-switch__list-item">
            <a href="#" onClick={ (e) => this.onClickHandler(e, 'ru') }>
              <img src={ ruFlag } alt="ru" />
            </a>
          </li>
          <li className="lang-switch__list-item">
            <a href="#" onClick={ (e) => this.onClickHandler(e, 'en') }>
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
