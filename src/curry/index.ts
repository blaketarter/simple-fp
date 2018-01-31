// export const curry = (argCount, fn, argsList = []) => (
//   (...args) => {
//     const filteredArgs = args.filter(a => a !== undefined);
//     if (filteredArgs.length < argCount) {
//       return curry(argCount - filteredArgs.length, fn, argsList.concat(filteredArgs));
//     }
//     return fn(...[...argsList, ...filteredArgs]);
//   }
// );

interface CurriedFn1<T1, R> {
  (): CurriedFn1<T1, R>
  (x: T1): R;
}

interface CurriedFn2<T, U, R> {
  (x: T, y: U): R;
  (x: T): (y: U) => R;
}

interface CurriedFn3<T, U, V, R> {
  (x: T): CurriedFn2<U, V, R>;
  (x: T, y: U): (z: V) => R;
  (x: T, y: U, z: V): R;
}

export function curry2<T, U, R>(f: (x: T, y: U) => R): CurriedFn2<T, U, R> {
  function curriedFn(x: T): (y: U) => R;
  function curriedFn(x: T, y: U): R;
  function curriedFn(x: T, y?: U): any {
    switch (arguments.length) {
      case 1:
        return function (y: U): R {
          return f(x, y);
        }
      case 2:
        return f(x, y);
    }
  }
  return curriedFn;
}

export function curry3<T, U, V, R>(f: (x: T, y: U, z: V) => R): CurriedFn3<T, U, V, R> {
  function curriedFn(x: T): CurriedFn2<U, V, R>;
  function curriedFn(x: T, y: U): (z: V) => R;
  function curriedFn(x: T, y: U, z: V): R;
  function curriedFn(x: T, y?: U, z?: V): any {
    switch (arguments.length) {
      case 1:
        return curry2(function (y: U, z: V): R {
          return f(x, y, z);
        });
      case 2:
        return function (z: V): R {
          return f(x, y, z);
        }
      case 3:
        return f(x, y, z);
    }
  }
  return curriedFn;
}

// const add = curry2((a: number, b: number) => a + b);
// console.log(add(1)(2));
// console.log(add(1, 2));

// const sum = curry3((a: number, b: number, c: number) => a + b + c);
// console.log(sum(1)(2)(3));
// console.log(sum(1, 2)(3));
// console.log(sum(1)(2, 3));
// console.log(sum(1, 2, 3));
