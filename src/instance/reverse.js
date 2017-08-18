import fp from '../constructor';

export default function reverse() {
  const newList = fp([]);

  for (let i = this.length - 1; i >= 0; i -= 1) {
    newList.push(this[i]);
  }

  return newList;
};
