import React from 'react';

const logo = require('./../img/logo.svg');

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
            <li><a href="#">Новые</a></li>
            <li><a href="#">Популярные</a></li>
            <li><a href="#">Поиск</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
