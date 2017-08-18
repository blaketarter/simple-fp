const fp = require('../dist/fp');

const foo = [1, 2, 3, 4, 5];

const bar = fp(foo)
  .reverse()
  .take(3)
  .map(x => x + 1)
  .do(console.log)
  .filter(x => x > 4)
  .take(1);

console.log(bar);
