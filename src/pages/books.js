import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBooks, createBook,
} from '../redux/books/books';
import BookItem from '../components/BookItem';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);
  const createBookAction = bindActionCreators(createBook, dispatch);

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
            <BookItem title={book.title} author={book.author} bookId={book.id} />
          </li>
        ))}
      </ul>
      <form>
        <input type="text" name="bookTitle" placeholder="Add a title..." />
        <input type="text" name="bookAuthor" placeholder="Add an author name..." />
        <button
          type="submit"
          onClick={
            (e) => {
              e.preventDefault();
              createBookAction(newBook);
            }
          }
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Books;
