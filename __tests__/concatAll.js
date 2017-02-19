const fp = require('../index');

describe('concatAll', function() {
  it('returns the new flattened array', function() {
    const foo = fp([[6], [4], [1]]);
    const bar = foo.concatAll();

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(6);
    expect(bar[1]).toBe(4);
    expect(bar[2]).toBe(1);
  });

  it('does not mutate the original array', function() {
    const foo = fp([[6], [4], [1]]);
    const bar = foo.concatAll();

    expect(foo[0]).toBeInstanceOf(Array);
    expect(foo[0][0]).toBe(6);
    expect(foo[1]).toBeInstanceOf(Array);
    expect(foo[1][0]).toBe(4);
    expect(foo[2]).toBeInstanceOf(Array);
    expect(foo[2][0]).toBe(1);
  });
});
