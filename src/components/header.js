import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search';
import Language from './language';
import AuthBar from './auth';

import logo from './../img/logo.svg';

export default (props) => {

  return (
    <header>
      <div className="header">
        <div>
          <Link to="/"><img src={ logo } className="logo" alt="logo" /></Link>
        </div>
        <div className="navigation">
          <ul className="navigation__list">
            <li>
              <Link
                to="/"
                activeClassName="navigation__list_active"
                onlyActiveOnIndex={ true }>Новые</Link>
            </li>
            <li>
              <Link
                to="/popular"
                activeClassName="navigation__list_active">Популярные</Link>
            </li>
            <li>
              <Link
                to="/top"
                activeClassName="navigation__list_active">Топ</Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                activeClassName="navigation__list_active">Ожидаемые</Link>
            </li>
          </ul>
        </div>
        <SearchBar />
        <Language />
        {/*<AuthBar />*/}
      </div>
    </header>
  );
};
