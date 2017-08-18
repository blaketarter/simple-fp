const fp = require('../dist/fp');

describe('zip', function() {
  it('calls the combiner function on each item when then arrays are the same length', function() {
    const leftFoo = fp([1, 2, 3]);
    const rightFoo = fp([4, 5, 6]);
    const combinerFunction = jest.fn(function(left, right) {
      return left + right;
    });

    const bar = fp.zip(leftFoo, rightFoo, combinerFunction);

    expect(combinerFunction).toHaveBeenCalledTimes(3);
    expect(combinerFunction).toHaveBeenCalledWith(1, 4);
    expect(combinerFunction).toHaveBeenCalledWith(2, 5);
    expect(combinerFunction).toHaveBeenCalledWith(3, 6);
  });

  it('calls the combiner function on the number of items of the smallest array when then arrays are not the same length', function() {
    const leftFoo = fp([1, 2, 3]);
    const rightFoo = fp([4, 5, 6, 7]);
    const combinerFunction = jest.fn(function(left, right) {
      return left + right;
    });

    const bar = fp.zip(leftFoo, rightFoo, combinerFunction);

    expect(combinerFunction).toHaveBeenCalledTimes(3);
    expect(combinerFunction).toHaveBeenCalledWith(1, 4);
    expect(combinerFunction).toHaveBeenCalledWith(2, 5);
    expect(combinerFunction).toHaveBeenCalledWith(3, 6);
  });

  it('returns the new combined array', function() {
    const leftFoo = fp([1, 2, 3]);
    const rightFoo = fp([4, 5, 6]);
    const combinerFunction = jest.fn(function(left, right) {
      return left + right;
    });

    const bar = fp.zip(leftFoo, rightFoo, combinerFunction);

    expect(bar).not.toBe(leftFoo);
    expect(bar).not.toBe(rightFoo);
    expect(bar).toHaveLength(3);
    expect(bar[0]).toBe(5);
    expect(bar[1]).toBe(7);
    expect(bar[2]).toBe(9);
  });

  it('does not mutate the original arrays', function() {
    const leftFoo = fp([1, 2, 3]);
    const rightFoo = fp([4, 5, 6]);
    const combinerFunction = jest.fn(function(left, right) {
      return left + right;
    });

    const bar = fp.zip(leftFoo, rightFoo, combinerFunction);

    expect(leftFoo[0]).toBe(1);
    expect(leftFoo[1]).toBe(2);
    expect(leftFoo[2]).toBe(3);

    expect(rightFoo[0]).toBe(4);
    expect(rightFoo[1]).toBe(5);
    expect(rightFoo[2]).toBe(6);
  });
});
