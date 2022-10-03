const express = require('express');

const basicAuth = require('./server/auth');
const usersRouter = require('./routes/admin/users');
const petsRouter = require('./routes/pets');
const petsAdminRouter = require('./routes/admin/petsAdmin');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());
app.use(basicAuth);
app.use('/api/admin/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/admin/pets', petsAdminRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
