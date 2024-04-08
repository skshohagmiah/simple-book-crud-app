// models/Book.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Book schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
