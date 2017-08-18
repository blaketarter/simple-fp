import fp from '../constructor';

export default function unique() {
  const newList = fp([]);

  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (newList.indexOf(this[i]) < 0) {
      newList.push(this[i]);
    }
  }

  return newList;
};
