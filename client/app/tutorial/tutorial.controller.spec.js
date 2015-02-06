'use strict';

describe('Controller: TutorialCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeAppsApp'));

  var TutorialCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutorialCtrl = $controller('TutorialCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
