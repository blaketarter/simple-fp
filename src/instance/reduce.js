import fp from '../constructor';

export default function reduce(combiner, initialValue) {
  let counter;
  let accumulatedValue;

  if (!this.length) {
    return this;
  }

  if (initialValue == null) {
    counter = 1;
    accumulatedValue = this[0];
  } else {
    counter = 0;
    accumulatedValue = initialValue;
  }

  while (counter < this.length) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
    counter += 1;
  }

  return fp([accumulatedValue]);
};
