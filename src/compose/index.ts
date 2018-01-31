import { reduce } from '../reduce/index';
import { reverse } from '../reverse/index';
import { map } from '../map/index';

export function compose(...fns) {
  return (data) => {
    return reduce((acc, fn) => {
      return fn(acc);
    }, data, reverse(fns));
  }
};

const getHappy = compose(
  map(a => a + '!'),
  map(a => 'wow ' + a),
);

// console.log(getHappy(['foo', 'bar']));
