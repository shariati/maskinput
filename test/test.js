'use strict';
/* eslint-env mocha */
var assert = require('assert');


console.log(maskinput('123456'));

describe('maskinput', function () {

  it('should return masked input string', function (done) {
    var testName = 'Masked Number';
    var expected = maskinput('112233445566778899');
    done();
    assert.equal('XXXXXXXXXXXXXX8899', expected);
  });
});