/* eslint-disable consistent-return */
export default function find(predicateFunction) {
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (predicateFunction(this[i])) {
      return this[i];
    }
  }
};
/* eslint-enable consistent-return */
