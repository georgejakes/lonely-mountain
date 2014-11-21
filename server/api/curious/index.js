'use strict';

var express = require('express');
var controller = require('./curious.controller');

var router = express.Router();
router.get('/', controller.show);
router.post('/', controller.add);


module.exports = router;
