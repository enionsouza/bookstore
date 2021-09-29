import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function FormAddBook() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (title && author) {
      createBookAction({
        title,
        author,
      });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={addNewBook}>
      <input type="text" name="bookTitle" placeholder="Add a title..." onChange={updateTitle} value={title} />
      <input type="text" name="bookAuthor" placeholder="Add an author name..." onChange={updateAuthor} value={author} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormAddBook;
