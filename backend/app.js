const express = require('express');
const cors = require('cors');
const PORT = require('./app/config/app.config').appPort;

const db = require('./app/models');
const authRoutes = require('./app/routes/auth');
const orderRoutes = require('./app/routes/order');

const app = express();
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type', 'Origin', 'Authorization'],
    'credentials': true,
    'origin': 'http://localhost:3000',
    'methods': 'GET, HEAD, PUT,POST,DELETE'
}));
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(orderRoutes);
app.use(authRoutes);


const server = require('http').createServer(app);

db.sequelize.sync({ force: false })
    .then(res => {
        server.listen(PORT);
    })
    .catch(err => {
        console.log(err);
    })


