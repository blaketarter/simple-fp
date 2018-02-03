import { curry } from '../curry/index';

function _prop<T>(propPath: string, data: T): T {
  return data[propPath];
};

interface propFn {
  <T>(propPath: string): (data: T) => T;
  <T>(propPath: string, data: T): T;
}

export const prop: propFn = curry(_prop, 2);
