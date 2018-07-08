'use strict';

describe('Service: consumo', function () {

  // load the service's module
  beforeEach(module('yeomanApp'));

  // instantiate service
  var consumo;
  beforeEach(inject(function (_consumo_) {
    consumo = _consumo_;
  }));

  it('should do something', function () {
    expect(!!consumo).toBe(true);
  });

});
