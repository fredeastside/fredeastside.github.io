import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import reducers from './reducers';
import App from './App';

ReactDOM.render(
  <Provider store={ store(reducers) }>
    <App />
  </Provider>, document.querySelector('.container'));
