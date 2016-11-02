import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import browserHistory from './history';
import store from './store';
import reducers from './reducers';

import Root from './routes/Root';
import NotFound from './components/not_found';
import MoviesList from './containers/movies_list';
import Movie from './containers/movie';

const mainStore = store(reducers);
const history = syncHistoryWithStore(browserHistory, mainStore);

export default (
  <Provider store={ mainStore }>
    <Router history={ history }>{/*onUpdate={ () => window.scrollTo(0, 0) }*/}
      <Route path="/" component={ Root }>
        <IndexRoute component={ MoviesList } />
        <Route path="/movie(/:id)" component={ Movie } />
        <Route path="/:method" component={ (props) => {
          return ['popular', 'top_rated', 'upcoming', 'search'].includes(props.params.method)
            ? <MoviesList { ...props } />
            : <NotFound />
        } } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>
);
