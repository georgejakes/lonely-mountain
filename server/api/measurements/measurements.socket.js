/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Measurements = require('./measurements.model');

exports.register = function(socket) {
  Measurements.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Measurements.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('measurements:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('measurements:remove', doc);
}