import fp from '../constructor';

export default function reduceRight(combiner, initialValue) {
  let counter = this.length - 1;
  let accumulatedValue;

  if (!this.length) {
    return this;
  }

  if (initialValue == null) {
    accumulatedValue = this[counter];
    counter -= 1;
  } else {
    accumulatedValue = initialValue;
  }

  while (counter >= 0) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
    counter -= 1;
  }

  return fp([accumulatedValue]);
};
