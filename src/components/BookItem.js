import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';

function BookItem({ title, category, bookId }) {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  return (
    <>
      <span>
        Title:
        {' '}
        {title}
      </span>
      <br />
      <span>
        Category:
        {' '}
        {category}
      </span>
      <br />
      <button type="button" onClick={() => removeBookAction(bookId)}>Remove</button>
    </>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookItem;
