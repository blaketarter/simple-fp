import { reduce } from '../reduce/index';
import { curry } from '../curry/index';

interface predicateFn<T> {
  (x: T, y: number, z: T[]): boolean;
}

function _filter<T>(predicate: predicateFn<T>, data: T[]): T[] {
  return reduce((newData, item, index) => {
    if (predicate(item, index, data)) {
      newData.push(item);
    }
    return newData;
  }, [], data)
};

interface filterFn {
  <T>(projection: predicateFn<T>): (data: T[]) => T[];
  <T>(projection: predicateFn<T>, data: T[]): T[];
}

export const filter: filterFn = curry(_filter, 2);
