const fp = require('../dist/fp');

describe('reverse', function() {
  it('returns the array reversed', function() {
    const foo = fp([1, 2, 3]);
    const bar = foo.reverse();

    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(3);
    expect(bar[1]).toBe(2);
    expect(bar[2]).toBe(1);
  });

  it('does not mutate the original array', function() {
    const foo = fp([1, 2, 3]);
    const bar = foo.reverse();

    expect(foo[0]).toBe(1);
    expect(foo[1]).toBe(2);
    expect(foo[2]).toBe(3);
  });
});
