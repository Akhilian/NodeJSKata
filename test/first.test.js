const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const appFirst = require('../app/first');

describe('First', () => {
  describe('#isFalse', () => {
    it('should return false', () => {
      // Given
      const expected = false;

      // When
      const result = appFirst.isFalse(true);

      // Then
      assert.equal(result, expected);
      expect(result).to.be.false;
      result.should.equal(expected);
    })
  });
});
