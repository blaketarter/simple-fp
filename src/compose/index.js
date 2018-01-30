import { _reduce } from '../reduce/index';
import { reverse } from '../reverse/index';

export const compose = (...fns) => (
  (data) => {
    return _reduce((acc, fn) => {
      return fn(acc);
    }, data, reverse(fns));
  }
);
