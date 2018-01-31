import { reduce } from '../reduce/index';
import { curry } from '../curry/index';

interface projectionFn<T, U> {
  (x: T, y: number, z: T[]): U;
}

function _map<T, U>(projection: projectionFn<T, U>, data: T[]): U[] {
  return reduce((newData, item, index) => {
    newData.push(projection(item, index, data));
    return newData;
  }, [], data)
};

interface mapFn {
  <T, U>(projection: projectionFn<T, U>): (data: T[]) => U[];
  <T, U>(projection: projectionFn<T, U>, data: T[]): U[];
}

export const map: mapFn = curry(_map, 2);
