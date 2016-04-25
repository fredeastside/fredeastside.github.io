import React from 'react';

export default (props) => {
  return (
    <div className="navigation">
      <img src="/assets/logo.png" className="logo" alt="logo" />
      <ul className="navigation__list">
        <li><a href="#">Новые</a></li>
        <li><a href="#">Популярные</a></li>
        <li><a href="#">Поиск</a></li>
      </ul>
    </div>
  );
};
