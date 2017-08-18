import fp from '../constructor';

export default function take(numberToTake) {
  const newList = fp([]);
  for (let i = 0; i < numberToTake; i += 1) {
    newList.push(this[i]);
  }
  return newList;
};
