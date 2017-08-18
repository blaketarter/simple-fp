import fp from '../constructor';

export default function range(from, to) {
  const newList = fp([]);

  if (from === to || to === undefined) {
    newList.push(from);
    return newList;
  }

  if (from < to) {
    for (let i = from; i <= to; i += 1) {
      newList.push(i);
    }
    return newList;
  }

  for (let i = from; i >= to; i -= 1) {
    newList.push(i);
  }

  return newList;
};
