'use strict';

module.exports = function (inputString, options) {
  inputString = (inputString || '112233445566778899').trim();
  options = options || {};

  var MASKED_CHARACTER = '#';
  var TOTAL_UNMASKED_TRAILING_CHARACTERS = 0;
  var TOTAL_UNMASKED_LEADING_CHARACTERS = 0;

  var maskedCharacter = MASKED_CHARACTER;
  var totalUnmaskedTrailingCharacters = TOTAL_UNMASKED_TRAILING_CHARACTERS;
  var totalUnmaskedLeadingCharacters = TOTAL_UNMASKED_LEADING_CHARACTERS;

  if (options.maskedCharacter) {
    maskedCharacter = options.maskedCharacter;
    if (maskedCharacter.length > 1) {
      maskedCharacter = options.maskedCharacter.charAt(0);
    }
    MASKED_CHARACTER = maskedCharacter;
  }

  if (options.totalUnmaskedTrailingCharacters) {
    totalUnmaskedTrailingCharacters = Math.abs(options.totalUnmaskedTrailingCharacters);
    TOTAL_UNMASKED_TRAILING_CHARACTERS = totalUnmaskedTrailingCharacters;
  }

  if (options.totalUnmaskedLeadingCharacters) {
    totalUnmaskedLeadingCharacters = Math.abs(options.totalUnmaskedLeadingCharacters);
    TOTAL_UNMASKED_LEADING_CHARACTERS = totalUnmaskedLeadingCharacters;
  }

  var totalLenght = inputString.length;
  var maskedLength;
  var maskedBuffer = '';

  maskedBuffer = maskedBuffer.concat(inputString.substring(0, TOTAL_UNMASKED_LEADING_CHARACTERS));
  if (totalLenght > TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS) {
    maskedLength = totalLenght - (TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS);
    for (var i = 0; i < maskedLength; i++) {
      maskedBuffer += MASKED_CHARACTER;
    }
  } else {
    maskedLength = 0;
    totalLenght = TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS;
  }

  maskedBuffer = maskedBuffer.concat(inputString.substring(TOTAL_UNMASKED_LEADING_CHARACTERS + maskedLength, totalLenght));
  var masked = maskedBuffer.toString();
  return masked;
};
