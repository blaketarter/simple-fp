const fp = require('../dist/fp');

describe('take', function() {
  it('returns the new array of the right length', function() {
    const foo = fp([6, 4, 1]);
    const bar = foo.take(2);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(2);
    expect(bar[0]).toBe(6);
    expect(bar[1]).toBe(4);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const bar = foo.take(2);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });
});
