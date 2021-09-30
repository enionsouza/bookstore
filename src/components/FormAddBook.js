import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function FormAddBook() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (title && category) {
      createBookAction({
        title,
        category,
      });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form className="form" onSubmit={addNewBook}>
        <input type="text" className="book-title-input" placeholder="Book title" onChange={updateTitle} value={title} />
        <input type="text" className="book-category-input" placeholder="Category" onChange={updateCategory} value={category} />
        <button type="submit" className="submit-button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default FormAddBook;
