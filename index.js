'use strict'

module.exports = function (inputString, options) {
  inputString = (inputString || '112233445566778899').trim()
  options = options || {}

  const MASKED_CHARACTER = '#'
  const TOTAL_UNMASKED_TRAILING_CHARACTERS = 0
  const TOTAL_UNMASKED_LEADING_CHARACTERS = 0

  let maskedCharacter = MASKED_CHARACTER
  let totalUnmaskedTrailingCharacters = TOTAL_UNMASKED_TRAILING_CHARACTERS
  let totalUnmaskedLeadingCharacters = TOTAL_UNMASKED_LEADING_CHARACTERS

  if (options.maskedCharacter) {
    maskedCharacter = options.maskedCharacter
    if (maskedCharacter.length > 1) {
      maskedCharacter = options.maskedCharacter.charAt(0)
    }
  }

  if (options.totalUnmaskedTrailingCharacters) {
    totalUnmaskedTrailingCharacters = Math.abs(options.totalUnmaskedTrailingCharacters)
  }

  if (options.totalUnmaskedLeadingCharacters) {
    totalUnmaskedLeadingCharacters = Math.abs(options.totalUnmaskedLeadingCharacters)
  }

  let totalLenght = inputString.length
  let maskedLength
  let maskedBuffer = ''

  maskedBuffer = maskedBuffer.concat(inputString.substring(0, totalUnmaskedLeadingCharacters))
  if (totalLenght > totalUnmaskedTrailingCharacters + totalUnmaskedLeadingCharacters) {
    maskedLength = totalLenght - (totalUnmaskedTrailingCharacters + totalUnmaskedLeadingCharacters)
    for (let i = 0; i < maskedLength; i++) {
      maskedBuffer += maskedCharacter
    }
  } else {
    maskedLength = 0
    totalLenght = totalUnmaskedTrailingCharacters + totalUnmaskedLeadingCharacters
  }

  maskedBuffer = maskedBuffer.concat(inputString.substring(totalUnmaskedLeadingCharacters + maskedLength, totalLenght))
  return maskedBuffer.toString()
}
