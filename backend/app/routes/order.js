const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders } = require('../controllers/order');
const { getCurrentUser, authenticate } = require('../middleware/auth');


router.post('/create-order/:userId', [authenticate, getCurrentUser], createOrder);
router.get('/get-orders/:userId', [authenticate, getCurrentUser], getAllOrders);

module.exports = router;