'use strict';

angular.module('nodeAppsApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $window) {
    
    Auth.isLoggedInAsync(function(response){
      if(response === true) {
        console.log("main: is logged in");
        $window.location.href = '/events';
      } else if(response === false) {
        console.log("main: not logged in");
      }
    });

    $scope.loginOauth = function(provider) {
    	$window.location.href = '/auth/' + provider;
    };

});
