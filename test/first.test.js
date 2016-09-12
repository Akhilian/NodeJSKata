var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var appFirst = require('../app/first');

describe('First', function () {
  describe('#isFalse', function () {
    it('should return false', function () {
      // Given
      var expected = false;

      // When
      var result = appFirst.isFalse(true);

      // Then
      assert.equal(result, expected);
      expect(result).to.be.false;
      result.should.equal(expected);
    })
  });
});
