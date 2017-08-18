const fp = require('../dist/fp');

describe('do', function() {
  it('calls the effect function with the array', function() {
    const foo = fp([6, 4, 1]);
    const effectFunction = jest.fn();

    foo.do(effectFunction);

    expect(effectFunction).toHaveBeenCalledTimes(1);
    expect(effectFunction).toHaveBeenCalledWith(foo);
  });

  it('returns the array unchanged', function() {
    const foo = fp([9, 5, 1]);
    const effectFunction = jest.fn();

    const bar = foo.do(effectFunction);

    expect(bar).toBe(foo);
  });
});
