const fp = require('../fp');

describe('find', function() {
  it('calls the predicate function on each item', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item < 4;
    });

    const bar = foo.find(predicateFunction);

    expect(predicateFunction).toHaveBeenCalledTimes(3);
    expect(predicateFunction).toHaveBeenCalledWith(6);
    expect(predicateFunction).toHaveBeenCalledWith(4);
    expect(predicateFunction).toHaveBeenCalledWith(1);
  });

  it('returns the first item that matches the predicateFunction', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item < 4;
    });

    const bar = foo.find(predicateFunction);

    expect(bar).not.toBe(foo);
    expect(bar).toBe(1);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const predicateFunction = jest.fn(function(item) {
      return item < 4;
    });

    const bar = foo.find(predicateFunction);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });
});
