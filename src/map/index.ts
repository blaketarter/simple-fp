import { reduce } from '../reduce/index';

interface projectionFn<T, U> {
  (x: T, y: number, z: T[]): U;
}

function _map<T, U>(projection: projectionFn<T, U>, data: T[]): U[] {
  return reduce((newData, item, index) => {
    newData.push(projection(item, index, data));
    return newData;
  }, [], data)
};

export function map<T, U>(projection: projectionFn<T, U>, data: T[]): U[];
export function map<T, U>(projection: projectionFn<T, U>): (data: T[]) => U[];
export function map<T, U>(projection: projectionFn<T, U>, data?: T[]): any {
  switch (arguments.length) {
    case 1:
      return function curriedFn(data: T[]): U[] {
        return _map(projection, data);
      };
    default:
      return _map(projection, data);
  }
};

// console.log(map(a => a + '!', ['hello', 'world']));
// console.log(map(a => a + '!')(['hello', 'world']));
