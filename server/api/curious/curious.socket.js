/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Curious = require('./curious.model');

exports.register = function(socket) {
  Curious.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Curious.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('curious:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('curious:remove', doc);
}