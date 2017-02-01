'use strict';

module.exports = function (message, options) {
  message = (message || '112233445566778899').trim();
  options = options || {};

  var MASKED_CHARACTER = 'X';
  var TOTAL_UNMASKED_TRAILING_CHARACTERS = 0;
  var TOTAL_UNMASKED_LEADING_CHARACTERS = 4;

  if (options.maskedCharacter) {
    maskedCharacter = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;
    MASKED_CHARACTER = maskedCharacter;
  }

  if (options.totalUnmaskedTrailingDigits) {
    totalUnmaskedTrailingDigits = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;
    TOTAL_UNMASKED_TRAILING_CHARACTERS = totalUnmaskedTrailingDigits;
  }

  if (options.totalUnmaskedLeadingDigits) {
    totalUnmaskedLeadingDigits = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;
    TOTAL_UNMASKED_LEADING_CHARACTERS = totalUnmaskedLeadingDigits;
  }


  var totalLenght = message.length;
  var maskedLength;
  var maskedBuffer = '';

  maskedBuffer = maskedBuffer.concat(message.substring(0, TOTAL_UNMASKED_TRAILING_CHARACTERS));
  if (totalLenght > TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS) {
    maskedLength = totalLenght - (TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS);
    for (var i = 0; i < maskedLength; i++) {
      maskedBuffer = maskedBuffer + MASKED_CHARACTER;
    }
  } else {
    maskedLength = 0;
    totalLenght = TOTAL_UNMASKED_TRAILING_CHARACTERS + TOTAL_UNMASKED_LEADING_CHARACTERS;
  }

  maskedBuffer = maskedBuffer.concat(message.substring(TOTAL_UNMASKED_TRAILING_CHARACTERS + maskedLength, totalLenght));
  var masked = maskedBuffer.toString();
  return masked;
};