const express = require('express');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
