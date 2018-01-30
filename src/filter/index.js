import { curry } from '../curry/index';
import { _reduce } from '../reduce/index';

const _filter = (predicate, data) => (
  _reduce((newData, item, index) => {
    if (predicate(item, index, data)) {
      newData.push(item);
    }
    return newData;
  }, [], data)
);

export const filter = (predicate, data) => (
  curry(2, _filter)(predicate, data)
);
