import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';

function BookItem({ title, category, bookId }) {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  return (
    <div className="book-item">
      <div className="book-item-panel-1">
        <div className="flex flex-dir-col">
          <span className="category">
            {category}
          </span>
          <span className="title">
            {title}
          </span>
          <span className="author-name">
            Author&apos;s Name
          </span>
          <ul className="flex nav-menu-list ul-comments-remove-edit">
            <li>
              <button
                type="button"
                onClick={() => {}}
                className="link-button"
              >
                Comments
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => removeBookAction(bookId)}
                className="link-button"
              >
                Remove
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {}}
                className="link-button"
              >
                Edit
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="book-item-panel-2">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="60, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div>
          <div className="percent">60%</div>
          <div className="completed">completed</div>
        </div>
      </div>
      <div className="book-item-panel-3">
        <div className="chapter-label">CURRENT CHAPTER</div>
        <div className="current-chapter">Chapter 1</div>
        <button
          type="button"
          onClick={() => {}}
          className="update-button"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookItem;
