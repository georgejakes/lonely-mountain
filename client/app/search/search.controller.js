'use strict';

angular.module('lmApp').controller('SearchCtrl', function ($scope, $http, socket) {
  $scope.awesomeThings = [];

  $(".typeahead").typeahead({
    source: function (query, callback) {
      $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: query,
          sensor: true
        }
      }).then(function (res) {
        var addresses = [];
        angular.forEach(res.data.results, function (item) {
          addresses.push(item.formatted_address);
        });
        callback(addresses);

        console.log(addresses);
      });

    },

    updater: function (item) {
      $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: item,
          sensor: true
        }
      }).then(function (res) {
        var location = res.data.results[0].geometry.location;
        $scope.loadmap(location);
      });
      return item;
    }
  });

  $scope.loadmap = function (center) {

    var mapOptions = {
      zoom: 8,
      center: center
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Hello World!'
    });
  }


  $scope.$on('$destroy', function () {
    socket.unsyncUpdates('thing');
  });
});
