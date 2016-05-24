import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage, fetchMovies, fetchMovie } from './../actions';

import ruFlag from './../img/ru.svg';
import enFlag from './../img/gb.svg';


let urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();


function analizeQueryString(context){
    console.log(context.props.location.pathname)
    if(urlParams.query || urlParams.page || context.props.location.pathname.indexOf("/movie") === -1)
    {
	let isDefaultRoute = context.props.location.pathname.length === 1;
	let route = isDefaultRoute ?context.props.location.pathname.replace("/", "now_playing") : context.props.location.pathname.replace("/","");
	 context.props.fetchMovies(route, urlParams.page,urlParams.query);
    }   
    else
    {
     	context.props.fetchMovie(context.props.location.pathname.split("/")[2]);
         
    }
}

class Language extends Component {

  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  self = this
  onClickHandler(event) {
    event.preventDefault();

      const language = event.target.closest('li').dataset.lang;
      localStorage.setItem('language', language);
      //we should set current query in state and read it on language change
     analizeQueryString(this);
;
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
    return bindActionCreators({ changeLanguage,fetchMovies, fetchMovie }, dispatch);
}

function mapStateToProps(state)
{
  return {
      location: state.routing.locationBeforeTransitions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);
