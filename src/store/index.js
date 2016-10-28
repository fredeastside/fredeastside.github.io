import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger(),
      middlewares = [
        thunk
      ];

  if (NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

export default applyMiddleware(...middlewares)(createStore);
