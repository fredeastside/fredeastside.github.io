import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();

export default applyMiddleware(ReduxPromise, logger)(createStore);
