import fp from '../constructor';

export default function reject(predicateFunction) {
  const newList = fp([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (!predicateFunction(this[i])) {
      newList.push(this[i]);
    }
  }
  return newList;
};
