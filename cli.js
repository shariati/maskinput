#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var maskinput = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(maskinput(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    maskinput <string>',
      '    maskinput <string> --maskedCharacter X',
      '    maskinput <string> --totalUnmaskedTrailingDigits 2',
      '    echo <string> | maskinput',
      '',
      '  Example',
      '    maskinput "12345678"',
      maskinput('12345678')
    ].join('\n'));
  },
  version: pkg.version
});
