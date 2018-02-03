const { take } = require('../dist');

describe('take', () => {
  it('is defined', () => {
    expect(take).toBeDefined();
  });

  it('returns the expected data', () => {
    const received = take(2, [1, 2, 3, 4, 5]);
    const expected = [1, 2];
    expect(received).toEqual(expected);
  });

  it('handles curried form', () => {
    const received = take(2)([5, 4, 3, 2, 1]);
    const expected = [5, 4];
    expect(received).toEqual(expected);
  });

  it('does not mutate the original data', () => {
    const originalData = [1, 2, 3, 4, 5];
    const received = take(2, originalData);
    const expected = [1, 2];
    expect(received).not.toBe(originalData);
    expect(received).not.toEqual(originalData);
  });
});
