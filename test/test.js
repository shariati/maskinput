'use strict'
/* eslint-env mocha */
const assert = require('assert')
const maskinput = require('../')

console.log(maskinput('john.doe@space.com'))
describe('maskinput', () => {
  it('should return masked john.doe@space.com as ##################', done => {
    const expected = maskinput('john.doe@space.com')
    assert.strict.equal('##################', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.doe##########', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 8
    })
    assert.strict.equal('john.doe##########', expected)
    done()
  })
  it('should return masked john.doe@space.com as ########@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: 10
    })
    assert.strict.equal('########@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.###@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 5,
      totalUnmaskedTrailingCharacters: 10
    })
    assert.strict.equal('john.###@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as ------------------', done => {
    const expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-'
    })
    assert.strict.equal('------------------', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.doe----------', done => {
    const expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedLeadingCharacters: 8
    })
    assert.strict.equal('john.doe----------', expected)
    done()
  })
  it('should return masked john.doe@space.com as --------@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedTrailingCharacters: 10
    })
    assert.strict.equal('--------@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.---@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      maskedCharacter: '-',
      totalUnmaskedLeadingCharacters: 5,
      totalUnmaskedTrailingCharacters: 10
    })
    assert.strict.equal('john.---@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.doe@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: 20
    })
    assert.strict.equal('john.doe@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as ##########pace.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: -8
    })
    assert.strict.equal('##########pace.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.doe@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: '20'
    })
    assert.strict.equal('john.doe@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as ##########pace.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedTrailingCharacters: '-8'
    })
    assert.strict.equal('##########pace.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as john.###@space.com', done => {
    const expected = maskinput('john.doe@space.com', {
      totalUnmaskedLeadingCharacters: '5',
      totalUnmaskedTrailingCharacters: '10'
    })
    assert.strict.equal('john.###@space.com', expected)
    done()
  })
  it('should return masked john.doe@space.com as XXXXXXXXXXXXXXXXXX', done => {
    const expected = maskinput('john.doe@space.com', {
      maskedCharacter: 'X'
    })
    assert.strict.equal('XXXXXXXXXXXXXXXXXX', expected)
    done()
  })
  it('should return masked 123 as ###', done => {
    const expected = maskinput('123')
    assert.strict.equal('###', expected)
    done()
  })
  it('should return masked 145534534533 as ############', done => {
    const expected = maskinput('145534534533')
    assert.strict.equal('############', expected)
    done()
  })
})
