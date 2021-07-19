const express = require('express');
const router = express.Router();
const {addHotel, getHotels, getHotelById} = require('../controllers/hotel');


router.get('/get-hotels', getHotels);
router.get('/hotel/:hotelId', getHotelById);
router.post('/add-hotel', addHotel);

module.exports = router;