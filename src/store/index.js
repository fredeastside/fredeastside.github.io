import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger(),
      middlewares = [
        ReduxPromise
      ];

  if (NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

export default applyMiddleware(...middlewares)(createStore);
