import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReducer from './books/books';

const rootReducer = combineReducers({ books: bookReducer });

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
