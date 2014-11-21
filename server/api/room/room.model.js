'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  ownerId: String,
  location: {
    type: [Number],
    index: '2d'
  },
  ownership: String,
  beds: Number,
  rent: Number,
  info: String,
  active: Boolean
});

RoomSchema.index({
  location: "2d"
});

module.exports = mongoose.model('Room', RoomSchema);
