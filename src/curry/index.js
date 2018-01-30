export const curry = (argCount, fn, argsList = []) => (
  (...args) => {
    const filteredArgs = args.filter(a => a !== undefined);
    if (filteredArgs.length < argCount) {
      return curry(argCount - filteredArgs.length, fn, argsList.concat(filteredArgs));
    }
    return fn(...[...argsList, ...filteredArgs]);
  }
);
