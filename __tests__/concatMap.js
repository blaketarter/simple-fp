const fp = require('../dist/fp');

describe('concatMap', function() {
  it('returns the new flattened and projected array', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn(function(item) {
      return [item, item];
    });
    const bar = foo.concatMap(projectionFunction);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(6);
    expect(bar[0]).toBe(6);
    expect(bar[1]).toBe(6);
    expect(bar[2]).toBe(4);
    expect(bar[3]).toBe(4);
    expect(bar[4]).toBe(1);
    expect(bar[5]).toBe(1);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn(function(item) {
      return [item, item];
    });
    const bar = foo.concatMap(projectionFunction);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });
});
