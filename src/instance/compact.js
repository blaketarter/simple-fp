import fp from '../constructor';

export default function compact() {
  const newList = fp([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (this[i]) {
      newList.push(this[i]);
    }
  }
  return newList;
};
