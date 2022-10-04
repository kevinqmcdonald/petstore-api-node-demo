/*
A naive database that is hard-coded. In a production environment,
we would use connector libraries to communicate with an actual database.
 */

const User = require("../models/User");
const Pet = require("../models/Pet");

const DOG_PET = new Pet(1, 'Rover', 'Dog', 3);
const CAT_PET = new Pet(2, 'Mittens', 'Cat', 4);
const BIRD_PET = new Pet(3, 'Chirpy', 'Bird', 1);
const PETS = [
  DOG_PET,
  CAT_PET,
  BIRD_PET
];

const ADMIN_USER = new User(1, 'admin', 'admin-password', 'admin');
const DEFAULT_USER = new User(2, 'user', 'password');
const USERS = [
  ADMIN_USER,
  DEFAULT_USER
];

module.exports = {
  PETS,
  USERS
};