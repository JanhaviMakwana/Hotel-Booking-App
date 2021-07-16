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

db.user.hasMany(db.order);
db.order.belongsTo(db.user, { constraints: true, onDelete: 'CASCADE' });

module.exports = db;