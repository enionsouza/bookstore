import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBooks, createBook, removeBook,
} from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);
  const createBookAction = bindActionCreators(createBook, dispatch);
  const removeBookAction = bindActionCreators(removeBook, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  const newBook = {
    author: 'Giovanni Boccaccio',
    title: 'The Decameron',
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>
              {book.title}
              {' '}
              by
              {' '}
              {book.author}
            </span>
            <button type="button" onClick={() => removeBookAction(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" name="bookTitle" placeholder="Add a title..." />
        <input type="text" name="bookAuthor" placeholder="Add an author name..." />
        <button type="submit" onClick={() => createBookAction(newBook)}>Submit</button>
      </form>
    </>
  );
};

export default Books;
