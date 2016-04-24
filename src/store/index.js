import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

export default applyMiddleware(ReduxPromise)(createStore);
