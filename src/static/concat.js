import fp from '../constructor';

export default function concat(...items) {
  const newList = fp([]);

  for (let i = 0, ii = items.length; i < ii; i += 1) {
    if (!(items[i] instanceof Array)) {
      newList.push(items[i]);
    } else {
      for (let j = 0, jj = items[i].length; j < jj; j += 1) {
        newList.push(items[i][j]);
      }
    }
  }

  return newList;
}
