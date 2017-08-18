export default function forEach(projectionFunction) {
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    projectionFunction(this[i]);
  }
  return this;
};
