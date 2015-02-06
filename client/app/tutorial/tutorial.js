'use strict';

angular.module('nodeAppsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tutorial', {
        url: '/tutorial',
        templateUrl: 'app/tutorial/tutorial.html',
        controller: 'TutorialCtrl'
      });
  });