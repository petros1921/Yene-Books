const mongoose = require('mongoose');

// Define the schema for the book model
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  author: {
    type: String,
    required: true, // Author is required
  },
  genre: {
    type: String,
    required: false, // Genre is optional
  },
  description: {
    type: String,
    required: false, // Description is optional
  },
  coverImage: {
    type: String,
    required: false, // Cover image is optional
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt timestamps

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Export the model
module.exports = Book;
