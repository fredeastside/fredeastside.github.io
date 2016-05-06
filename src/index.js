import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import reducers from './reducers';

import App from './App';
import NotFound from './components/not_found';
import MoviesList from './containers/movies_list';
import Movie from './containers/movie';

const mainStore = store(reducers);
const history = syncHistoryWithStore(browserHistory, mainStore);

ReactDOM.render(
  <Provider store={ mainStore }>
    <Router history={ history }>{/*onUpdate={ () => window.scrollTo(0, 0) }*/}
      <Route path="/" component={ App }>
        <IndexRoute component={ () => <MoviesList apiAction="now_playing" /> } />
        <Route path="/popular" component={ () => <MoviesList apiAction="popular" /> } />
        <Route path="/top" component={ () => <MoviesList apiAction="top_rated" /> } />
        <Route path="/upcoming" component={ () => <MoviesList apiAction="upcoming" /> } />
        <Route path="/movie/:movieId" component={ Movie } />
        <Route path="/search" component={ (props) => {
          return (
            <MoviesList apiAction="search" query={ props.location.query } />
          );
        } } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>, document.querySelector('.container'));
