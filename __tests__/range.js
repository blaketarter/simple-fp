const fp = require('../dist/fp');

describe('range', function() {
  it('returns an array starting from the first arg and ending in the second arg when the from is less than to', function() {
    const foo = fp.range(1, 5);

    expect(foo).toHaveLength(5);
    expect(foo[0]).toBe(1);
    expect(foo[1]).toBe(2);
    expect(foo[2]).toBe(3);
    expect(foo[3]).toBe(4);
    expect(foo[4]).toBe(5);
  });

  it('returns an array starting from the first arg and ending in the second arg when the from is grater than to', function() {
    const foo = fp.range(1, -5);

    expect(foo).toHaveLength(7);
    expect(foo[0]).toBe(1);
    expect(foo[1]).toBe(0);
    expect(foo[2]).toBe(-1);
    expect(foo[3]).toBe(-2);
    expect(foo[4]).toBe(-3);
    expect(foo[5]).toBe(-4);
    expect(foo[6]).toBe(-5);
  });

  it('returns an array containing the first arg when the first arg is the same as the second arg', function() {
    const foo = fp.range(1, 1);

    expect(foo).toHaveLength(1);
    expect(foo[0]).toBe(1);
  });

  it('returns an array containing the first arg when the second arg is missing', function() {
    const foo = fp.range(1);

    expect(foo).toHaveLength(1);
    expect(foo[0]).toBe(1);
  });
});
