import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../redux/books/books';
import BookItem from '../components/BookItem';
import FormAddBook from '../components/FormAddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookItem title={book.title} author={book.author} bookId={book.id} />
          </li>
        ))}
      </ul>
      <FormAddBook />
    </>
  );
};

export default Books;
