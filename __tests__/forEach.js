const fp = require('../dist/fp');

describe('forEach', function() {
  it('calls the projection function on each item', function() {
    const foo = fp([6, 4, 1]);
    const projectionFunction = jest.fn();

    foo.forEach(projectionFunction);

    expect(projectionFunction).toHaveBeenCalledTimes(3);
    expect(projectionFunction).toHaveBeenCalledWith(6);
    expect(projectionFunction).toHaveBeenCalledWith(4);
    expect(projectionFunction).toHaveBeenCalledWith(1);
  });

  it('returns the array unchanged', function() {
    const foo = fp([9, 5, 1]);
    const projectionFunction = jest.fn();

    const bar = foo.forEach(projectionFunction);

    expect(bar).toBe(foo);
  });
});
