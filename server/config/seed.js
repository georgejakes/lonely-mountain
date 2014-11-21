/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Place = require('../api/place/place.model');
var Room = require('../api/room/room.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
Place.find({}).remove(function () {
  Place.create({
    name: "Kundanahalli Gat",
    city: "Bangalore",
    pincode: "560037",
    location: [-10, -27],
    active: true
  },{
    name: "Maathahalli Bridge",
    city: "Bangalore",
    pincode: "560037",
    location: [-100, -28],
    active: true
  },{
    name: "Trinity Circle",
    city: "Bangalore",
    pincode: "560001",
    location: [-210, -27],
    active: true
  }, function () {
    console.log('finished populating places');
  });
});
Room.find({}).remove(function () {
  Room.create({
  name: "Sample 1",
  ownerId: 123,
  location:[10,-27],
  ownership: "own",
  beds : 1,
  rent: 5000,
  info: "Nothing",
  active: true
  },{
  name: "Sample 2",
  ownerId: 124,
  location:[-100,-27],
  ownership: "own",
  beds : 1,
  rent: 50000,
  info: "Nothing",
  active: true
  },{
  name: "Sample 3",
  ownerId: 124,
  location:[210,-27],
  ownership: "own",
  beds : 1,
  rent: 5000,
  info: "Nothing",
  active: true
  },function () {
    console.log('finished populating rooms');
  });
});