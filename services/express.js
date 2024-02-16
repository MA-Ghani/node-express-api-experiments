const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config(); // Environment Variables
const router = require('../routes/createRouter')();
const mongoSanitize = require('express-mongo-sanitize');
const app = express();



app.use(cors());
app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(mongoSanitize()); // To remove data, use:
app.use(mongoSanitize({ replaceWith: '_' })); // Or, to replace prohibited characters with _, use:
app.use(morgan('dev'));

/**
 * Connect to MongoDB.
 */
require('./mongoose')(app);

/**
 * Use Routes
 */

app.use('/', router);

/**
 * Default Public Route
 */

app.get('/', (req, res) => {
    res.json('MAG Experments API');
});
