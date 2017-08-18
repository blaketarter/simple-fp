const fp = require('../dist/fp');

describe('pick', function() {
  it('can pick a prop', function() {
    const foo = fp([{ value: 1}, { value: 2 }]);
    const bar = foo.pick(['value']);

    expect(bar).toHaveLength(2);
    expect(bar[0]).toBeInstanceOf(Object);
    expect(bar[0].value).toBe(1);
    expect(bar[1]).toBeInstanceOf(Object);
    expect(bar[1].value).toBe(2);
  });

  it('can pick n props as single array arg', function() {
    const foo = fp([{ value_a: 'a', value_b: 'b', value_c: 'c' }, { value_a: 'd', value_b: 'e', value_c: 'f' }]);
    const bar = foo.pick(['value_a', 'value_b', 'value_c']);

    expect(bar).toHaveLength(2);
    expect(bar[0]).toBeInstanceOf(Object);
    expect(bar[0].value_a).toBe('a');
    expect(bar[0].value_b).toBe('b');
    expect(bar[0].value_c).toBe('c');
    expect(bar[1]).toBeInstanceOf(Object);
    expect(bar[1].value_a).toBe('d');
    expect(bar[1].value_b).toBe('e');
    expect(bar[1].value_c).toBe('f');
  });

  it('does not mutate the original array', function() {
    const foo = fp([{ value: 1}, { value: 2 }]);
    const bar = foo.pick(['value']);

    expect(foo[0]).toBeInstanceOf(Object);
    expect(foo[0].value).toBe(1);
    expect(foo[1]).toBeInstanceOf(Object);
    expect(foo[1].value).toBe(2);
  });
});
