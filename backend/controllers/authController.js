const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`SignIn Request - Email: ${email}, Password: ${password}`);

    // Check if user exists
    const user = await User.findOne({ email });
    console.log('User Found:', user);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    console.log('Generated Token:', token);

    res.status(200).json({ message: 'Sign in successful', token });
  } catch (error) {
    console.error('SignIn Error:', error); // Log detailed error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getUserProfile = (req, res) => {
  res.json({
    message: 'User profile data',
    user: req.user 
  });
};

module.exports = {
  signUp,
  signIn,
  getUserProfile
};