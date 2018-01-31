import { reduce } from '../reduce/index';

interface predicateFn<T> {
  (x: T, y: number, z: T[]): boolean;
}

function _filter<T, U>(predicate: predicateFn<T>, data: T[]): U[] {
  return reduce((newData, item, index) => {
    if (predicate(item, index, data)) {
      newData.push(item);
    }
    return newData;
  }, [], data)
};

export function filter<T, U>(predicate: predicateFn<T>, data: T[]): U[];
export function filter<T, U>(predicate: predicateFn<T>): (data: T[]) => U[];
export function filter<T, U>(predicate: predicateFn<T>, data?: T[]): any {
  switch (arguments.length) {
    case 1:
      return function curriedFn(data: T[]): U[] {
        return _filter(predicate, data);
      };
    default:
      return _filter(predicate, data);
  }
};

// console.log(filter(a => a > 5, [1, 5, 10, 15]));
// console.log(filter(a => a > 5)([1, 5, 10, 15]));
