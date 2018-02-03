import { reduce } from '../reduce/index';
import { curry } from '../curry/index';

function _take<T>(amount: number, data: T[]): T[] {
  return reduce((newData, item, index) => {
    if (index < amount) {
      newData.push(item);
    }
    return newData;
  }, [], data)
};

interface takeFn {
  <T>(amount: number): (data: T[]) => T[];
  <T>(amount: number, data: T[]): T[];
}

export const take: takeFn = curry(_take, 2);
