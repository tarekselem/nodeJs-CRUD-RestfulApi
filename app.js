const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
const app = express();

// Logging configurations
const logger = require('./shared/logger');
const expressWinston = require('express-winston');

app.use(expressWinston.logger({
    transports: [logger],
    meta: false,
    msg: `{{req.ip}} - {{res.statusCode}} - {{req.method}} - {{res.responseTime}}ms - {{req.url}} - {{req.headers['user-agent']}}`,
    expressFormat: false,
    colorize: true
}));

logger.log('info','system is up!');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:admin123@ds147213.mlab.com:47213/productsdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.send('WELCOME!');
});
app.use('/api/products', product);

const port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});