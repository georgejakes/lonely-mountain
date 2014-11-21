'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CuriousSchema = new Schema({
  email: String,
  data: {},
  active: Boolean
});

module.exports = mongoose.model('Curious', CuriousSchema);
