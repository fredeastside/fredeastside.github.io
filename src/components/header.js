import React from 'react';
import { Link } from 'react-router';
import Search from './search';

const logo = require('./../img/logo.svg');

export default (props) => {
  console.log('render Header');
  return (
    <header>
      <div className="header">
        <div>
          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
        </div>
        <div className="navigation">
          <ul className="navigation__list">
            <li><Link to="/">Новые</Link></li>
            <li><Link to="/popular">Популярные</Link></li>
            <li><Link to="/top">Топ</Link></li>
            <li><Link to="/upcoming">Ожидаемые</Link></li>
          </ul>
        </div>
        <Search />
      </div>
    </header>
  );
};
