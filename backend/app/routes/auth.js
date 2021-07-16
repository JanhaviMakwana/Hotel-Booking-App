const { login, signup, getUserProfile, updateUserProfile } = require('../controllers/auth');
const { getCurrentUser, authenticate } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/user/:userId', [authenticate, getCurrentUser], getUserProfile);
router.post('/user/:userId', [authenticate, getCurrentUser], updateUserProfile);

module.exports = router;