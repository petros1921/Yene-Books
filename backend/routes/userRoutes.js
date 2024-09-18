const express = require('express');
const router = express.Router();
const { signUp, signIn, getUserProfile } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

// POST /auth/signup - User registration
router.post('/signup', signUp);

// POST /auth/signin - User login
router.post('/signin', signIn);

// GET /auth/profile - Protected route (requires JWT authentication)
router.get('/profile', verifyToken, getUserProfile); 

module.exports = router;
