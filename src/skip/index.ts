import { reduce } from '../reduce/index';
import { curry } from '../curry/index';

function _skip<T>(amount: number, data: T[]): T[] {
  return reduce((newData, item, index) => {
    if (index > amount - 1) {
      newData.push(item);
    }
    return newData;
  }, [], data)
};

interface skipFn {
  <T>(amount: number): (data: T[]) => T[];
  <T>(amount: number, data: T[]): T[];
}

export const skip: skipFn = curry(_skip, 2);
