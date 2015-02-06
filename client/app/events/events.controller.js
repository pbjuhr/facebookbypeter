'use strict';

angular.module('nodeAppsApp')
  .controller('EventsCtrl', function ($scope, Auth, $facebook, $location) {
    
    $facebook.getLoginStatus().then(function(response) {
      console.log("got login status");
      var token = response.authResponse.accessToken;
      //console.log("facebook token: " + token);
      if(response.status === "connected") {
        console.log("is logged in to facebooks");
        getEvents(token);
      }
    }, function(err) {
      console.log("Could not connect to facebook...");
      console.log(err);
      $location.path('/');
    });

    function getEvents(token) {
      console.log("gets the events");
      $facebook.api("me/events", {access_token: token}).then(function (response) {
        console.log("events: " + JSON.stringify(response));
        $scope.events = response.data;
      }, function(err) {
        console.log("Could not get events...");
        console.log(err);
      });
    }

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

});
