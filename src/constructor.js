function fp(list) {
  if (list instanceof fp) return list;
  if (!(this instanceof fp)) return new fp(list); // eslint-disable-line new-cap
  return this.push.apply(this, list); // eslint-disable-line prefer-spread
}

fp.prototype = Object.create(Array.prototype);

export default fp;
