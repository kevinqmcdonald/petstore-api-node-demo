const express = require('express');
const router = express.Router();
const pets = require("../util/db").PETS;

/* GET all pets */
router.get('/', function(req, res, next) {
  res.send(pets);
});

module.exports = router;
