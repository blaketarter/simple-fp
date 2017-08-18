const fp = require('../dist/fp');

describe('map', function() {
  it('calls the projection function on each item', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn(function(item) {
      return item + 1;
    });

    const bar = foo.map(projectionFunction);

    expect(projectionFunction).toHaveBeenCalledTimes(3);
    expect(projectionFunction).toHaveBeenCalledWith(6);
    expect(projectionFunction).toHaveBeenCalledWith(4);
    expect(projectionFunction).toHaveBeenCalledWith(1);
  });

  it('returns the new array', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn(function(item) {
      return item + 1;
    });

    const bar = foo.map(projectionFunction);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(7);
    expect(bar[1]).toBe(5);
    expect(bar[2]).toBe(2);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn(function(item) {
      return item + 1;
    });

    const bar = foo.map(projectionFunction);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });
});
