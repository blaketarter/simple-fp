function fp(list) {
  if (list instanceof fp) return list;
  if (!(this instanceof fp)) return new fp(list);
  this.push.apply(this, list);
}

fp.prototype = Object.create(Array.prototype);

export default fp;
