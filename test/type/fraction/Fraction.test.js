var assert = require('assert');
var math = require('../../../index');


describe('Fraction', function () {

  it('should have a property isFraction', function () {
    var a = new math.type.Fraction(1,3);
    assert.strictEqual(a.isFraction, true);
  });

  it('should have a property type', function () {
    var a = new math.type.Fraction(1,3);
    assert.strictEqual(a.type, 'Fraction');
  });

  it.skip('toJSON', function () {
    // TODO: implement and test Fraction.toJSON
  });

  it.skip('fromJSON', function () {
    // TODO: implement and test Fraction.fromJSON
  });

});
