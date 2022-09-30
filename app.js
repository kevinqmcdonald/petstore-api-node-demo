const express = require('express');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/orders', ordersRouter);

module.exports = app;
