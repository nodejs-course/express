var express = require('express');
var router = express.Router();

var usersData = require('../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usersData);
});

router.get('/:id', function(req, res, next) {
  res.send(usersData[req.params.id]);
});

router.post('/', (req, res) => {
  "use strict";

  res.send(req.body);
});

module.exports = router;
