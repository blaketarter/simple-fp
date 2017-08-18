import fp from '../constructor';

export default function zip(leftList, rightList, combiner) {
  const newList = fp([]);

  for (let i = 0, ii = Math.min(leftList.length, rightList.length); i < ii; i += 1) {
    newList.push(combiner(leftList[i], rightList[i]));
  }

  return newList;
};
