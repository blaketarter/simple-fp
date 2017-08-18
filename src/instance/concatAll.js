import fp from '../constructor';

export default function concatAll() {
  const newList = fp([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    newList.push(...this[i]);
  }

  return newList;
};
