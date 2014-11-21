'use strict';

var _ = require('lodash');
var Measurements = require('./measurements.model');

// Get list of measurementss
exports.index = function(req, res) {
  Measurements.find(function (err, measurementss) {
    if(err) { return handleError(res, err); }
    return res.json(200, measurementss);
  });
};

// Get a single measurements
exports.show = function(req, res) {
  Measurements.findById(req.params.id, function (err, measurements) {
    if(err) { return handleError(res, err); }
    if(!measurements) { return res.send(404); }
    return res.json(measurements);
  });
};

// Creates a new measurements in the DB.
exports.create = function(req, res) {
  Measurements.create(req.body, function(err, measurements) {
    if(err) { return handleError(res, err); }
    return res.json(201, measurements);
  });
};

// Updates an existing measurements in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Measurements.findById(req.params.id, function (err, measurements) {
    if (err) { return handleError(res, err); }
    if(!measurements) { return res.send(404); }
    var updated = _.merge(measurements, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, measurements);
    });
  });
};

// Deletes a measurements from the DB.
exports.destroy = function(req, res) {
  Measurements.findById(req.params.id, function (err, measurements) {
    if(err) { return handleError(res, err); }
    if(!measurements) { return res.send(404); }
    measurements.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}