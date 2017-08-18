const fp = require('../dist/fp');

describe('fp should be chainable', function() {
  it('forEach return value is chainable', function() {
    const foo = fp([1, 2, 3, 4, 5]);
    const projectionFunction = jest.fn();

    const bar = foo
      .forEach(projectionFunction)
      .forEach(projectionFunction);
    
    expect(projectionFunction).toHaveBeenCalledTimes(10);
    expect(bar).toBeInstanceOf(fp);
  });

  it('map return value is chainable', function() {
    const foo = fp([1, 2, 3, 4, 5]);
    const projectionFunction = jest.fn();

    const bar = foo
      .map(projectionFunction)
      .map(projectionFunction);
    
    expect(projectionFunction).toHaveBeenCalledTimes(10);
    expect(bar).toBeInstanceOf(fp);
  });

  it('filter return value is chainable', function() {
    const foo = fp([1, 2, 3, 4, 5]);
    const predicateFunction = jest.fn(function() {
      return true;
    });

    const bar = foo
      .filter(predicateFunction)
      .filter(predicateFunction);
    
    expect(predicateFunction).toHaveBeenCalledTimes(10);
    expect(bar).toBeInstanceOf(fp);
  });

  it('reduce return value is chainable', function() {
    const foo = fp([1, 2, 3, 4, 5]);
    const combinerFunction = jest.fn(function(total, current) {
      return total + current;
    });

    const bar = foo
      .reduce(combinerFunction)
      .reduce(combinerFunction);
    
    expect(combinerFunction).toHaveBeenCalledTimes(4);
    expect(bar).toBeInstanceOf(fp);
  });

  it('concatAll return value is chainable', function() {
    const foo = fp([[[1]], [[2]], [[3]], [[4]], [[5]]]);

    const bar = foo
      .concatAll()
      .concatAll();
    
    expect(bar).toBeInstanceOf(fp);
  });

  it('concatMap return value is chainable', function() {
    const foo = fp([1, 2, 3, 4, 5]);
    const projectionFunction = jest.fn(function(item) {
      return [item, item];
    });

    const bar = foo
      .concatMap(projectionFunction)
      .concatMap(projectionFunction);
    
    expect(projectionFunction).toHaveBeenCalledTimes(15);
    expect(bar).toBeInstanceOf(fp);
  });

  it('zip return value is chainable', function() {
    const leftFoo = [1, 2];
    const rightFoo = [3, 4];
    const combinerFunction = jest.fn(function(left, right) {
      return left + right;
    });
    const projectionFunction = jest.fn();

    const bar = fp
      .zip(leftFoo, rightFoo, combinerFunction)
      .forEach(projectionFunction);
    
    expect(combinerFunction).toHaveBeenCalledTimes(2);
    expect(projectionFunction).toHaveBeenCalledTimes(2);
    expect(bar).toBeInstanceOf(fp);
  });

  it('they should all be chainable together', function() {
    const leftFoo = fp([1, 2, 3]);
    const rightFoo = fp([[3], [4]]);
    const combinerFunction1 = jest.fn(function(left, right) {
      return left + right;
    });
    const combinerFunction2 = jest.fn(function(total, current) {
      return total + current;
    });
    const projectionFunction1 = jest.fn();
    const projectionFunction2 = jest.fn(function(item) {
      return [item, item];
    });
    const projectionFunction3 = jest.fn(function(item) {
      return item + 1;
    });
    const predicateFunction = jest.fn(function(current) {
      return current > 2;
    });

    const leftFooResult = leftFoo
      .filter(predicateFunction)
      .concatMap(projectionFunction2);
    
    const rightFooResult = rightFoo
      .concatAll();

    const bar = fp
      .zip(leftFooResult, rightFooResult, combinerFunction1)
      .forEach(projectionFunction1)
      .map(projectionFunction3)
      .reduce(combinerFunction2);
    
    expect(combinerFunction1).toHaveBeenCalledTimes(2);
    expect(combinerFunction2).toHaveBeenCalledTimes(1);
    expect(projectionFunction1).toHaveBeenCalledTimes(2);
    expect(projectionFunction2).toHaveBeenCalledTimes(1);
    expect(projectionFunction3).toHaveBeenCalledTimes(2);
    expect(predicateFunction).toHaveBeenCalledTimes(3);
    expect(bar).toBeInstanceOf(fp);
    expect(leftFooResult).toBeInstanceOf(fp);
    expect(rightFooResult).toBeInstanceOf(fp);
  });
});
