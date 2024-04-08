// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const {createBook,getAllBooks,deleteBook,updateBook} = require('../controllers/bookController');

// Routes for books
router.get('/', getAllBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
