interface combinerFn<T, U> {
  (acc: T, curr: U, index: number, data: U[]): T;
}

function _reduce<T, U>(combiner: combinerFn<T, U>, initial: T, data: U[]) {
  let newData = initial;
  for (let i = 0, ii = data.length; i < ii; i++) {
    newData = combiner(newData, data[i], i, data);
  }
  return newData;
};

export function reduce<T, U>(combiner: combinerFn<T, U>, initial: T): (data: U[]) => T;
export function reduce<T, U>(combiner: combinerFn<T, U>, initial: T, data: U[]): T;
export function reduce<T, U>(combiner: combinerFn<T, U>, initial: T, data?: U[]): any {
  switch (arguments.length) {
    case 2:
      return function curriedFn(data: U[]) {
        return _reduce(combiner, initial, data);
      };
    default:
      return _reduce(combiner, initial, data);
  }
};

// console.log(reduce((a: string, b: string) => a + b, '', ['hello', 'world']));
// console.log(reduce((a: string, b: string) => a + b, '')(['hello', 'world']));
