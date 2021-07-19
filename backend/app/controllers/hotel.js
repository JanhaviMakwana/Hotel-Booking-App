const db = require('../models');
const Hotel = db.hotel;

exports.addHotel = async (req, res) => {

    const { address, hotelName, persons, price, beds, ratings, freeCancellation, nights, images, facilities } = req.body;

    try {

        const hotel = await Hotel.create({
            address: address,
            hotelName: hotelName,
            persons: persons,
            price: price,
            beds: beds,
            nights: nights,
            ratings: ratings,
            freeCancellation: freeCancellation
        });

        if (hotel) {
            images.map(image => {
                return hotel.createHotelImage({ image: image });
            });
            facilities.map(facility => {
                return hotel.createHotelFacility({ facility: facility });
            });

            return res.status(200).json({ message: 'hotel added successfully...' })
        }

    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getHotels = async (req, res) => {

    try {

        const hotels = await Hotel.findAll({
            include: [{ model: db.hotelImage }, { model: db.hotelFacility }]
        });

        return res.send(hotels);

    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getHotelById = async (req, res) => {
    const { hotelId } = req.params;
    try {
        const hotel = await Hotel.findOne({ where: { id: hotelId }, include: [{ model: db.hotelImage }, { model: db.hotelFacility }] });
        return res.send(hotel);
    }
    catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}