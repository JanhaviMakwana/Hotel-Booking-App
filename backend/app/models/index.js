const dbConfig = require('../config/database.config');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('../models/user')(sequelize, Sequelize);
db.order = require('../models/order')(sequelize, Sequelize);
db.hotel = require('../models/hotel')(sequelize, Sequelize);
db.hotelImage = require('../models/hotel-image')(sequelize, Sequelize);
db.hotelFacility = require('./hotel-facility')(sequelize, Sequelize);

db.user.hasMany(db.order);
db.hotel.hasMany(db.hotelImage);
db.hotel.hasMany(db.hotelFacility);
module.exports = db;