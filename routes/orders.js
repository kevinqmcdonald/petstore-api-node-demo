const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Order = require("../models/Order");

const orders = [];

/* GET single order */
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    res.status(404).send('The order with the given ID was not found');
  }

  res.send(order);
});

/* POST new order */
router.post('/', (req, res) => {
  // Validate request body
  const schema = Joi.object({
    petId: Joi.number().min(1).required(),
    price: Joi.number().precision(2).required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error);
  }

  const order = new Order(orders.length + 1, req.body.petId, req.body.price);
  orders.push(order);
  res.status(201).send(order);
});

module.exports = router;
