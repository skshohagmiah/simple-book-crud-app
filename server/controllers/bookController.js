
const Book = require('../models/book');

  // Get all books
 const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Create a new book
   const createBook = async (req, res) => {
    const newBook = new Book(req.body);
    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Update a book
  const updateBook = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Delete a book
  const deleteBook = async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: 'Book deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
module.exports = {getAllBooks,updateBook,deleteBook,createBook};
