const fp = require('../dist/fp');

describe('concat', function() {
  it('returns the array as all of the arguments concatted together', function() {
    const a = 'a';
    const b = 1;
    const c = ['c']
    const d = [[4]];
    const e = [[5], [6]];
    const f = ['f', 'g'];

    const foo = fp.concat(a, b, c, d, e, f);

    expect(foo).toHaveLength(8);
    expect(foo[0]).toBe(a);
    expect(foo[1]).toBe(b);
    expect(foo[2]).toBe(c[0]);
    expect(foo[3]).toBe(d[0]);
    expect(foo[4]).toBe(e[0]);
    expect(foo[5]).toBe(e[1]);
    expect(foo[6]).toBe(f[0]);
    expect(foo[7]).toBe(f[1]);
  });

  it('does not mutate the original values (if they can be)', function() {
    const a = 'a';
    const b = 1;
    const c = ['c']
    const d = [[4]];

    const foo = fp.concat(a, b, c, d);

    expect(a).toBe('a');
    expect(b).toBe(1);
    expect(c).toBeInstanceOf(Array);
    expect(c[0]).toBe('c');
    expect(d).toBeInstanceOf(Array);
    expect(d[0]).toBeInstanceOf(Array);
    expect(d[0][0]).toBe(4);
  });
});
