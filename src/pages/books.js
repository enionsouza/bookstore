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
        {Object.keys(books).map((id) => (
          <li key={id}>
            <BookItem title={books[id][0].title} category={books[id][0].category} bookId={id} />
          </li>
        ))}
      </ul>
      <FormAddBook />
    </>
  );
};

export default Books;
