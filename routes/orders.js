const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Order = require("../models/Order");

const orders = [];

/* POST new order */
router.post('/', (req, res) => {
  // Validate request body
  const schema = Joi.object({
    petId: Joi.number().min(1).required(),
    price: Joi.number().precision(2).required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }

  const order = new Order(orders.length + 1, req.body.petId, req.body.price);
  orders.push(order);
  res.status(201).send(order);
});

module.exports = router;
