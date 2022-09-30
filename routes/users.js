const express = require('express');
const router = express.Router();

const DEFAULT_USER = new User(1, 'test');
const users = [
  DEFAULT_USER
]

/* GET single User */
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send('The user with the given ID was not found')
  }

  res.send(user);
});

module.exports = router;
