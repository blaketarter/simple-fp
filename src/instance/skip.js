import fp from '../constructor';

export default function skip(numberToSkip) {
  const newList = fp([]);
  for (let i = numberToSkip; i < this.length; i += 1) {
    newList.push(this[i]);
  }
  return newList;
};
