const fp = require('../fp');

describe('unique', function() {
  it('returns the new array with no duplicate numbers', function() {
    const foo = fp([1, 6, 4, 4, 1]);
    const bar = foo.unique();

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(1);
    expect(bar[1]).toBe(6);
    expect(bar[2]).toBe(4);
  });

  it('returns the new array with no duplicate strings', function() {
    const foo = fp(['foo', 'bar', 'baz', 'foo']);
    const bar = foo.unique();

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe('foo');
    expect(bar[1]).toBe('bar');
    expect(bar[2]).toBe('baz');
  });

  it('returns the new array with no duplicate objects', function() {
    const obj1 = { value: 1 };
    const obj2 = { value: 2 };
    const obj3 = { value: 3 };
    const foo = fp([obj3, obj1, obj2, obj3]);
    const bar = foo.unique();

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(obj3);
    expect(bar[1]).toBe(obj1);
    expect(bar[2]).toBe(obj2);
  });

  it('does not mutate the original array', function() {
    const foo = fp([1, 6, 4, 4, 1]);
    const bar = foo.unique();

    expect(foo).toHaveLength(5);
    expect(foo[0]).toBe(1);
    expect(foo[1]).toBe(6);
    expect(foo[2]).toBe(4);
    expect(foo[3]).toBe(4);
    expect(foo[4]).toBe(1);
  });
});
