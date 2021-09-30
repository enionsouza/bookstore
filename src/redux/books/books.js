import { v4 as uuidv4 } from 'uuid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/n01FciEaSjaJcIxiLvnc/books/';

// Actions
const LOAD = 'bookstore/books/LOAD';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case (LOAD):
      return action.state;
    default: return state;
  }
}

// Action Creators
export const loadBooks = () => async (dispatch) => {
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: LOAD, state });
};

export const createBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    }),
  });
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: LOAD, state });
};

export const removeBook = (bookId) => async (dispatch) => {
  await fetch(`${URL}${bookId}`, {
    method: 'DELETE',
  });
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: LOAD, state });
};
