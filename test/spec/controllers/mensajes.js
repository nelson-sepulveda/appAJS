'use strict';

describe('Controller: MensajesCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var MensajesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MensajesCtrl = $controller('MensajesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MensajesCtrl.awesomeThings.length).toBe(3);
  });
});
