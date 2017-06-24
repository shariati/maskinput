'use strict';
const maskinput = require('../');

console.log(maskinput('john.doe@space.com'));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedLeadingCharacters: 8
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedTrailingCharacters: 10
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedLeadingCharacters: 5,
  totalUnmaskedTrailingCharacters: 10
}));
console.log(maskinput('john.doe@space.com', {
  maskedCharacter: '-'
}));
console.log(maskinput('john.doe@space.com', {
  maskedCharacter: '-',
  totalUnmaskedLeadingCharacters: 8
}));
console.log(maskinput('john.doe@space.com', {
  maskedCharacter: '-',
  totalUnmaskedTrailingCharacters: 10
}));
console.log(maskinput('john.doe@space.com', {
  maskedCharacter: '-',
  totalUnmaskedLeadingCharacters: 5,
  totalUnmaskedTrailingCharacters: 10
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedLeadingCharacters: 20
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedTrailingCharacters: -8
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedLeadingCharacters: '20'
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedTrailingCharacters: '-8'
}));
console.log(maskinput('john.doe@space.com', {
  totalUnmaskedLeadingCharacters: '5',
  totalUnmaskedTrailingCharacters: '10'
}));
console.log(maskinput('john.doe@space.com', {
  maskedCharacter: 'X'
}));
console.log(maskinput('123'));
console.log(maskinput('145534534533'));
