import { curry } from '../curry/index';
import { reduce } from '../reduce/index';

function _path<T>(propPath: string, data: T): T {
  return reduce((val, prop) => val[prop], data, propPath.split('.'));
};

interface pathFn {
  <T>(propPath: string): (data: T) => T;
  <T>(propPath: string, data: T): T;
}

export const path: pathFn = curry(_path, 2);
