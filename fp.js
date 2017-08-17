(function () {
  const root = this;

  function fp(list) {
    if (list instanceof fp) return list;
    if (!(this instanceof fp)) return new fp(list);
    this.push.apply(this, list);
  }

  fp.prototype = Object.create(Array.prototype);

  fp.prototype.forEach = function forEach(projectionFunction) {
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      projectionFunction(this[i]);
    }
    return this;
  };

  fp.prototype.map = function map(projectionFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      newList.push(projectionFunction(this[i]));
    }
    return newList;
  };

  fp.prototype.take = function map(numberToTake) {
    const newList = fp([]);
    for (let i = 0; i < numberToTake; i += 1) {
      newList.push(this[i]);
    }
    return newList;
  };

  fp.prototype.filter = function filter(predicateFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      if (predicateFunction(this[i])) {
        newList.push(this[i]);
      }
    }
    return newList;
  };

  fp.prototype.reject = function reject(predicateFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      if (!predicateFunction(this[i])) {
        newList.push(this[i]);
      }
    }
    return newList;
  };

  fp.prototype.reduce = function reduce(combiner, initialValue) {
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

  fp.prototype.reduceRight = function reduceRight(combiner, initialValue) {
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

  fp.prototype.concatAll = function concatAll() {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      newList.push(...this[i]);
    }

    return newList;
  };

  fp.prototype.concatMap = function concatMap(projectionFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      newList.push(projectionFunction(this[i]));
    }
    return newList.concatAll();
  };

  fp.prototype.pluck = function pluck(...properties) {
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

  fp.prototype.pick = function pluck(properties) {
    const newList = fp([]);

    for (let i = 0, ii = this.length; i < ii; i += 1) {
      let value = {};

      for (let j = 0, jj = properties.length; j < jj; j += 1) {
        value[properties[j]] = this[i][properties[j]];
      }

      newList.push(value);
    }

    return newList;
  };

  fp.prototype.unique = function uniq() {
    const newList = fp([]);

    for (let i = 0, ii = this.length; i < ii; i += 1) {
      if (newList.indexOf(this[i]) < 0) {
        newList.push(this[i]);
      }
    }

    return newList;
  };

  fp.prototype.find = function find(predicateFunction) {
    for (let i = 0, ii = this.length; i < ii; i += 1) {
      if (predicateFunction(this[i])) {
        return this[i];
      }
    }
  };

  fp.prototype.reverse = function reverse() {
    const newList = fp([]);

    for (let i = this.length - 1; i >= 0; i -= 1) {
      newList.push(this[i]);
    }

    return newList;
  }

  fp.zip = function zip(leftList, rightList, combiner) {
    const newList = fp([]);

    for (let i = 0, ii = Math.min(leftList.length, rightList.length); i < ii; i += 1) {
      newList.push(combiner(leftList[i], rightList[i]));
    }

    return newList;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = fp;
      exports = module.exports;
    }
    exports.fp = fp;
  } else {
    root.fp = fp;
  }
}.call(this));
