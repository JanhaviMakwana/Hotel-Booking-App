const moment = require('moment');
const db = require('./index');

module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define('hotel', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hotelName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        persons: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nights: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        beds: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ratings: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        freeCancellation: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
    return Hotel;
}