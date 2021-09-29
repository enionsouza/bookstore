import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';

const reducers = combineReducers({ books: bookReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
