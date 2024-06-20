const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

// @route POST api/users/register
// @desc Register new user
// @access Public
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(`Register attempt with Email: ${email}`);

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log(`User already exists for Email: ${email}`);
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    console.log(`User registered successfully: ${email}`);

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(`Login attempt with Email: ${email}`);

    // Validate presence of email and password
    if (!email || !password) {
      console.log('Please enter all fields');
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Find user by email
    let user = await User.findOne({ email });

    // Handle user not found
    if (!user) {
      console.log(`User not found for Email: ${email}`);
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log(`User found for Email: ${email}`);

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    // Handle password mismatch
    if (!isMatch) {
      console.log(`Invalid password attempt for Email: ${email}`);
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log(`User logged in successfully: ${email}`);

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      'yourJWTSecret', // Replace with your own secret
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;