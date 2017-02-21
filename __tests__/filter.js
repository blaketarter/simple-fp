const fp = require('../fp');

describe('filter', function() {
  it('calls the predicate function on each item', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item > 4;
    });

    const bar = foo.filter(predicateFunction);

    expect(predicateFunction).toHaveBeenCalledTimes(3);
    expect(predicateFunction).toHaveBeenCalledWith(6);
    expect(predicateFunction).toHaveBeenCalledWith(4);
    expect(predicateFunction).toHaveBeenCalledWith(1);
  });

  it('returns the new array', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item > 4;
    });

    const bar = foo.filter(predicateFunction);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(1);
    expect(bar[0]).toBe(6);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item > 4;
    });

    const bar = foo.filter(predicateFunction);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });
});
