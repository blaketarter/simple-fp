const fp = require('../dist/fp');

describe('compact', function() {
  it('removes all falsy values', function() {
    const foo = fp([1, 'a', 0, false, '', undefined, null, [], [1], NaN, 'foo']);
    const bar = foo.compact();

    expect(bar).toHaveLength(5);
    expect(bar[0]).toBe(1);
    expect(bar[1]).toBe('a');
    expect(bar[2]).toBeInstanceOf(Array);
    expect(bar[3][0]).toBe(1);
    expect(bar[4]).toBe('foo');
  });

  it('does not mutate the original array', function() {
    const foo = fp([1, 'a', 0, false, '', undefined, null, [], [1], NaN, 'foo']);
    const bar = foo.compact();

    expect(foo).toHaveLength(11);
    expect(foo[0]).toBe(1);
    expect(foo[1]).toBe('a');
    expect(foo[2]).toBe(0);
    expect(foo[3]).toBe(false);
    expect(foo[4]).toBe('');
    expect(foo[5]).toBe(undefined);
    expect(foo[6]).toBe(null);
    expect(foo[7]).toBeInstanceOf(Array);
    expect(foo[8][0]).toBe(1);
    expect(isNaN(foo[9])).toBe(true);
    expect(foo[10]).toBe('foo');
  });
});
