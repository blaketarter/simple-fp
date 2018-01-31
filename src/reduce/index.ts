import { curry } from '../curry/index';

interface combinerFn<T, U> {
  (acc: T, curr: U, index: number, data: U[]): T;
}

function _reduce<T, U>(combiner: combinerFn<T, U>, initial: T, data: U[]) {
  let newData = initial;
  for (let i = 0, ii = data.length; i < ii; i++) {
    newData = combiner(newData, data[i], i, data);
  }
  return newData;
};

interface reduceFn {
  <T, U>(combiner: combinerFn<T, U>): (initial: T) => (data: U[]) => T;
  <T, U>(combiner: combinerFn<T, U>, initial: T): (data: U[]) => T;
  <T, U>(combiner: combinerFn<T, U>, initial: T, data: U[]): T;
}

export const reduce: reduceFn = curry(_reduce, 3);
