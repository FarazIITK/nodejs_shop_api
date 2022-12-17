require('dotenv').config();

const express = require('express');

const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// Routes

// Home route --> to access the products from browser
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

