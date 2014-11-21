'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MeasurementsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Measurements', MeasurementsSchema);