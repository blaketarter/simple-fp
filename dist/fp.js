(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.fp = factory());
}(this, (function () { 'use strict';

function fp$1(list) {
  if (list instanceof fp$1) return list;
  if (!(this instanceof fp$1)) return new fp$1(list); // eslint-disable-line new-cap
  return this.push.apply(this, list); // eslint-disable-line prefer-spread
}

fp$1.prototype = Object.create(Array.prototype);

function forEach(projectionFunction) {
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    projectionFunction(this[i]);
  }
  return this;
}

function map(projectionFunction) {
  const newList = fp$1([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    newList.push(projectionFunction(this[i]));
  }
  return newList;
}

function take(numberToTake) {
  const newList = fp$1([]);
  for (let i = 0; i < numberToTake; i += 1) {
    newList.push(this[i]);
  }
  return newList;
}

function filter(predicateFunction) {
  const newList = fp$1([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (predicateFunction(this[i])) {
      newList.push(this[i]);
    }
  }
  return newList;
}

function reject(predicateFunction) {
  const newList = fp$1([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (!predicateFunction(this[i])) {
      newList.push(this[i]);
    }
  }
  return newList;
}

function reduce(combiner, initialValue) {
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

  return fp$1([accumulatedValue]);
}

function reduceRight(combiner, initialValue) {
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

  return fp$1([accumulatedValue]);
}

function concatAll() {
  const newList = fp$1([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    newList.push(...this[i]);
  }

  return newList;
}

function concatMap(projectionFunction) {
  const newList = fp$1([]);
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    newList.push(projectionFunction(this[i]));
  }
  return newList.concatAll();
}

function pluck(...properties) {
  const newList = fp$1([]);

  for (let i = 0, ii = this.length; i < ii; i += 1) {
    let value = this[i];

    for (let j = 0, jj = properties.length; j < jj; j += 1) {
      value = value[properties[j]];
    }

    newList.push(value);
  }

  return newList;
}

function pick(properties) {
  const newList = fp$1([]);

  for (let i = 0, ii = this.length; i < ii; i += 1) {
    const value = {};

    for (let j = 0, jj = properties.length; j < jj; j += 1) {
      value[properties[j]] = this[i][properties[j]];
    }

    newList.push(value);
  }

  return newList;
}

function unique() {
  const newList = fp$1([]);

  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (newList.indexOf(this[i]) < 0) {
      newList.push(this[i]);
    }
  }

  return newList;
}

/* eslint-disable consistent-return */
function find(predicateFunction) {
  for (let i = 0, ii = this.length; i < ii; i += 1) {
    if (predicateFunction(this[i])) {
      return this[i];
    }
  }
}
/* eslint-enable consistent-return */

function reverse() {
  const newList = fp$1([]);

  for (let i = this.length - 1; i >= 0; i -= 1) {
    newList.push(this[i]);
  }

  return newList;
}

function doEffect(effect) {
  effect(this);
  return this;
}

function zip(leftList, rightList, combiner) {
  const newList = fp$1([]);

  for (let i = 0, ii = Math.min(leftList.length, rightList.length); i < ii; i += 1) {
    newList.push(combiner(leftList[i], rightList[i]));
  }

  return newList;
}

fp$1.prototype.forEach = forEach;
fp$1.prototype.map = map;
fp$1.prototype.take = take;
fp$1.prototype.filter = filter;
fp$1.prototype.reject = reject;
fp$1.prototype.reduce = reduce;
fp$1.prototype.reduceRight = reduceRight;
fp$1.prototype.concatAll = concatAll;
fp$1.prototype.concatMap = concatMap;
fp$1.prototype.pluck = pluck;
fp$1.prototype.pick = pick;
fp$1.prototype.unique = unique;
fp$1.prototype.find = find;
fp$1.prototype.reverse = reverse;
fp$1.prototype.do = doEffect;

fp$1.zip = zip;

return fp$1;

})));
