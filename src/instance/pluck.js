import fp from '../constructor';

export default function pluck(...properties) {
  const newList = fp([]);

  for (let i = 0, ii = this.length; i < ii; i += 1) {
    let value = this[i];

    for (let j = 0, jj = properties.length; j < jj; j += 1) {
      value = value[properties[j]];
    }

    newList.push(value);
  }

  return newList;
};
