const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Ensure this is correct
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/yeneBooks'; // Default to local MongoDB if not found in env

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes); // Register book routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
