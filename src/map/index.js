import { curry } from '../curry/index';
import { _reduce } from '../reduce/index';

const _map = (projection, data) => (
  _reduce((newData, item, index) => {
    newData.push(projection(item, index, data));
    return newData;
  }, [], data)
);

export const map = (projection, data) => (
  curry(2, _map)(projection, data)
);
