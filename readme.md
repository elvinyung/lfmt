# lfmt
### by [Elvin Yung](https://github.com/elvinyung)
## Dead simple string formatting

[![Circle CI](https://circleci.com/gh/elvinyung/lfmt.svg?style=svg)](https://circleci.com/gh/elvinyung/lfmt)


### Quickstart
```JavaScript
var lfmt = require('lfmt');

var obj = {
  foo: 'bar',
  baz: {
    quux: 'norf'
  }
};

console.log(lfmt('{{foo}}', obj));  // 'bar'
console.log(lfmt('{{baz.quux}}', obj));  // 'norf'
```

### Installation

Install from [NPM](https://www.npmjs.com/package/lfmt):
`npm install lfmt`
