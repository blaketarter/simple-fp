const fp = require('../dist/fp');

console.time('range');
console.log(fp.range(1, 1000));
console.timeEnd('range');
