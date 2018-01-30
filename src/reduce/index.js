import { curry } from '../curry/index';

export const _reduce = (combiner, initial, data) => {
  let newData = initial;
  for (let i = 0, ii = data.length; i < ii; i++) {
    newData = combiner(newData, data[i], i, data);
  }
  return newData;
};

export const reduce = (combiner, initial, data) => (
  curry(3, _reduce)(combiner, initial, data)
);
