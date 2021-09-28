import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducers = combineReducers({ books: bookReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
