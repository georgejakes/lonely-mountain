'use strict';

angular.module('lmApp')
  .controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi) {
    $scope.awesomeThings = [];

    uiGmapGoogleMapApi.then(function(maps){
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });

    $scope.showMap = function() {
      // animate and show map
      $('#banner').animate({'opacity':0});
    };
    $scope.hideMap = function() {
      // animate and hide map
      $('#banner').animate({'opacity':1});
    };
    
    // Kept for references can be deleted later

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
