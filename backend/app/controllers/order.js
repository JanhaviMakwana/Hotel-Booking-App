const db = require('../models');


exports.createOrder = async (req, res) => {
    const { hotelId, days, price, rooms, paymentMode } = req.body;
    try {
        const placedOrder = await req.user.createOrder({
            hotelId: hotelId,
            days: days,
            price: price,
            rooms: rooms,
            paymentMode: paymentMode
        });

        return res.send(placedOrder);
    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await req.user.getOrders({order: [['id','DESC']]});
        await res.send(orders);

    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}