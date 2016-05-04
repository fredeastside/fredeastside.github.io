import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import NotFound from './components/not_found';
import NewMovies from './components/new_movies';

import store from './store';
import reducers from './reducers';
import App from './App';

const mainStore = store(reducers);
const history = syncHistoryWithStore(browserHistory, mainStore);

history.listen(location => console.log(location.pathname));

ReactDOM.render(
  <Provider store={ mainStore }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ NewMovies } />
        <Route path="foo" component={ App }/>
        <Route path="bar" component={ App }/>
        <Route path="/movie/:movieId" component={ NewMovies }/>
        <Route path="*" component={ NotFound }/>
      </Route>
    </Router>
  </Provider>, document.querySelector('.container'));
