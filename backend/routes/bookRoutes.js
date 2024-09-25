const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to get all books
router.get('/', bookController.getAllBooks);

// Route to add a new book
router.post('/', bookController.addBook);

// Route to get a specific book by ID
router.get('/:id', bookController.getBookById);

// Route to update a book by ID
router.put('/:id', bookController.updateBookById);

// Route to delete a book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
