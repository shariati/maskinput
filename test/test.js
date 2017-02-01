'use strict';
/* eslint-env mocha */
var assert = require('assert');
var maskinput = require('../');

console.log(maskinput('john.doe@space.com'));
describe('maskinput', function () {
  it('should return masked john.doe@space.com as ##################', function (done) {
    var expected = maskinput('john.doe@space.com');
    assert.equal('##################', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.doe##########', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 8
    });
    assert.equal('john.doe##########', expected);
    done();
  });
  it('should return masked john.doe@space.com as ########@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: 10
    });
    assert.equal('########@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.###@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 5,
      totalUnmaskedTrailingCharacters: 10
    });
    assert.equal('john.###@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as ------------------', function (done) {
    var expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-'
    });
    assert.equal('------------------', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.doe----------', function (done) {
    var expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedLeadingCharacters: 8
    });
    assert.equal('john.doe----------', expected);
    done();
  });
  it('should return masked john.doe@space.com as --------@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedTrailingCharacters: 10
    });
    assert.equal('--------@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.---@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedLeadingCharacters: 5,
      totalUnmaskedTrailingCharacters: 10
    });
    assert.equal('john.---@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.doe@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 20
    });
    assert.equal('john.doe@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as ##########pace.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: -8
    });
    assert.equal('##########pace.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.doe@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: '20'
    });
    assert.equal('john.doe@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as ##########pace.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: '-8'
    });
    assert.equal('##########pace.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as john.###@space.com', function (done) {
    var expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: '5',
      totalUnmaskedTrailingCharacters: '10'
    });
    assert.equal('john.###@space.com', expected);
    done();
  });
  it('should return masked john.doe@space.com as XXXXXXXXXXXXXXXXXX', function (done) {
    var expected = maskinput('john.doe@space.com', {
      maskedCharacter: 'X'
    });
    assert.equal('XXXXXXXXXXXXXXXXXX', expected);
    done();
  });
  it('should return masked 123 as ###', function (done) {
    var expected = maskinput('123');
    assert.equal('###', expected);
    done();
  });
  it('should return masked 145534534533 as ############', function (done) {
    var expected = maskinput('145534534533');
    assert.equal('############', expected);
    done();
  });
});
