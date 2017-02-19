const fp = function fpFn(list) {
    const initialList = list.slice(0);
    initialList.__proto__ = fp.prototype;
    return initialList;
};

fp.prototype = new Array;

fp.prototype.forEach = function forEach(projectionFunction) {
    for (let i = 0, ii = this.length; i < ii; i++) {
        projectionFunction(this[i]);
    }
    return this;
};

fp.prototype.map = function map(projectionFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i++) {
        newList.push(projectionFunction(this[i]));
    }
    return newList;
};

fp.prototype.filter = function filter(predicateFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i++) {
        if (predicateFunction(this[i])) {
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

fp.prototype.concatAll = function concatAll() {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i++) {
        newList.push.apply(newList, this[i]);
    }

    return newList;
};

fp.prototype.concatMap = function concatMap(projectionFunction) {
    const newList = fp([]);
    for (let i = 0, ii = this.length; i < ii; i++) {
        newList.push(projectionFunction(this[i]));
    }
    return newList.concatAll();
};

fp.zip = function zip(leftList, rightList, combiner) {
    const newList = fp([]);

    for (let i = 0, ii = Math.min(leftList.length, rightList.length); i < ii; i++) {
        newList.push(combiner(leftList[i], rightList[i]));
    }

    return newList;
};

module.exports = fp;