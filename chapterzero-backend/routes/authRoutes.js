require('dotenv').config();
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/authController');
const {protect, admin} = require('../middleware/authMiddleware.js'); // Import middleware

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, admin, getAllUsers);

router.get('/profile', protect, (req, res) => {
    res.json(req.user);
});

module.exports = router;