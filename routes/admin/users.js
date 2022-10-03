const USERS = require('../../util/db').USERS;
const express = require('express');
const router = express.Router();

/* GET single User */
router.get('/:id', (req, res) => {
  const user = USERS.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('The user with the given ID was not found')
  }

  res.send(user);
});

module.exports = router;
