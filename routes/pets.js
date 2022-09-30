const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Pet = require("../models/Pet");

const DOG_PET = new Pet(1, 'Rover', 'Dog', 3);
const CAT_PET = new Pet(2, 'Mittens', 'Cat', 4);
const BIRD_PET = new Pet(3, 'Chirpy', 'Bird', 1);
const pets = [
  DOG_PET,
  CAT_PET,
  BIRD_PET
]

/* GET all pets */
router.get('/', function(req, res, next) {
  res.send(pets);
});

/* PUT pet details */
router.put('/:id', (req, res) => {
  const pet = pets.find(p => p.id === parseInt(req.params.id));
  if (!pet) {
    return res.status(404).send('The pet with the given ID was not found')
  }

  // Validate request body
  const schema = Joi.object({
    name: Joi.string().required(),
    species: Joi.string().required(),
    age: Joi.number().min(1).required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error);
  }

  // Update Pet
  pet.name = req.body.name;
  pet.species = req.body.species;
  pet.age = req.body.age;
  res.send(pet);
});

module.exports = router;
