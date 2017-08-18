import fp from '../constructor';

export default function map(projectionFunction) {
  const newList = fp([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    newList.push(projectionFunction(this[i]));
  }
  return newList;
};
