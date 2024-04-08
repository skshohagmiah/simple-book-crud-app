
import  { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };


  useEffect(() => {
    fetchBooks();
  }, []);


  const handleAddBook = async bookData => {
    try {
      const response = await axios.post(`http://localhost:5000/books`, bookData);
      setBooks(prevBooks => [...prevBooks, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleUpdateBook = async bookData => {
    try {
      const response = await axios.put(`/books/${editingBookId}`, bookData);
      setBooks(prevBooks => prevBooks.map(book => (book._id === editingBookId ? response.data : book)));
      setEditingBookId(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async bookId => {
    try {
      await axios.delete(`http://localhost:5000/books/${bookId}`);
      setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEditBook = bookId => {
    setEditingBookId(bookId);
  };

  return (
    <div className="container mx-auto p-4 max-w-screen-2xl md:w-[80%]">
      <h1 className="text-3xl font-bold mb-8">Manage Books</h1>
      <BookForm onSubmit={editingBookId ? handleUpdateBook : handleAddBook} initialData={editingBookId ? books.find(book => book._id === editingBookId) : null} />
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
    </div>
  );
};

export default App;
