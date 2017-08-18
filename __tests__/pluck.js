const fp = require('../dist/fp');

describe('pluck', function() {
  it('can get a value one level deep', function() {
    const foo = fp([{ value: 1}, { value: 2 }]);
    const bar = foo.pluck('value');

    expect(bar).toHaveLength(2);
    expect(bar[0]).toBe(1);
    expect(bar[1]).toBe(2);
  });

  it('can get a value n levels deep', function() {
    const foo = fp([{ value_a: { value_b: { value_c: 1 }}}, { value_a: { value_b: { value_c: 2 }}}]);
    const bar = foo.pluck('value_a', 'value_b', 'value_c');

    expect(bar).toHaveLength(2);
    expect(bar[0]).toBe(1);
    expect(bar[1]).toBe(2);
  });

  it('does not mutate the original array', function() {
    const foo = fp([{ value: 1}, { value: 2 }]);
    const bar = foo.pluck('value');

    expect(foo[0]).toBeInstanceOf(Object);
    expect(foo[0].value).toBe(1);
    expect(foo[1]).toBeInstanceOf(Object);
    expect(foo[1].value).toBe(2);
  });
});
