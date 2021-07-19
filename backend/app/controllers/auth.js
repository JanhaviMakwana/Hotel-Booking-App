const db = require('../models');
const User = db.user;
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const appConfig = require('../config/app.config');


exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    try {
        const user = await User.findOne({ where: { email: email, password: password } });

        if (!user) return res.status(404).json({ message: 'User not found' });

        const userWithToken = generateToken(user.get({ raw: true }));

        return res.send(userWithToken);
    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.signup = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };

    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email: email, password: password,role: role });

        const userWithToken = generateToken(user.get({ raw: true }));

        return res.send(userWithToken);

    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.updateUserProfile = async (req, res) => {
    //  const { userId } = req.params;
    const { name, address, contactNo } = req.body;
    try {
        const updatedUser = await req.user.update({ name: name, address: address, contactNo: contactNo });
        return res.send(updatedUser);
    } catch (e) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getUserProfile = (req, res) => {
    try {
        const user = req.user.get({ raw: true });
        delete user.password;
        res.send({ ...user });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

const generateToken = (user) => {
    delete user.password;

    const token = jwt.sign(user, appConfig.appKey, { expiresIn: '24h' });
    console.log(typeof token);

    return { ...{ user }, ...{ token } }
};

