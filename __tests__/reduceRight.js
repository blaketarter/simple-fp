const fp = require('../dist/fp');

describe('reduceRight', function() {
  it('calls the combiner function on the last two items if no intial value was given', function() {
    const foo = fp([6, 4, 1]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction);

    expect(combinerFunction).toHaveBeenCalledTimes(2);
    expect(combinerFunction).toHaveBeenCalledWith(1, 4);
    expect(combinerFunction).toHaveBeenCalledWith(5, 6);
  });

  it('calls the combiner function on each items if an intial value was given', function() {
    const foo = fp([6, 4, 1]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction, 0);

    expect(combinerFunction).toHaveBeenCalledTimes(3);
    expect(combinerFunction).toHaveBeenCalledWith(0, 1);
    expect(combinerFunction).toHaveBeenCalledWith(1, 4);
    expect(combinerFunction).toHaveBeenCalledWith(5, 6);
  });

  it('returns the new array correctly without an initial value given', function() {
    const foo = fp([6, 4, 1]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(1);
    expect(bar[0]).toBe(11);
  });

  it('returns the new array correctly with an initial value given', function() {
    const foo = fp([6, 4, 1]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction, 9);

    expect(bar).not.toBe(foo);
    expect(bar).toHaveLength(1);
    expect(bar[0]).toBe(20);
  });

  it('does not mutate the original array', function() {
    const foo = fp([6, 4, 1]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction);

    expect(foo[0]).toBe(6);
    expect(foo[1]).toBe(4);
    expect(foo[2]).toBe(1);
  });

  it('returns an empty array if given an empty array', function() {
    const foo = fp([]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo.reduceRight(combinerFunction);

    expect(bar.length).toBe(0);
  });
});
