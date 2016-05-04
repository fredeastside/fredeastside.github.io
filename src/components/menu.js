import React from 'react';
import logo from './../img/logo.svg';
import Search from './search';

export default (props) => {
  console.log('render Menu');
  return (
    <header>
      <div className="header">
        <div>
          <a href="/"><img src={logo} className="logo" alt="logo" /></a>
        </div>
        <div className="navigation">
          <ul className="navigation__list">
            <li><a href="/">Новые</a></li>
            <li><a href="/popular">Популярные</a></li>
            <li><a href="/top">Топ</a></li>
            <li><a href="/upcoming">Ожидаемые</a></li>
          </ul>
        </div>
        <Search />
      </div>
    </header>
  );
};
