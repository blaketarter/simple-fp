interface CurriedFn1<T1, R> {
  (): CurriedFn1<T1, R>
  (t1: T1): R;
}

interface CurriedFn2<T1, T2, R> {
  (): CurriedFn2<T1, T2, R>;
  (t1: T1): CurriedFn1<T2, R>;
  (t1: T1, t2: T2): R;
}

interface CurriedFn3<T1, T2, T3, R> {
  (): CurriedFn3<T1, T2, T3, R>;
  (t1: T1): CurriedFn2<T2, T3, R>;
  (t1: T1, t2: T2): CurriedFn1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
}

interface CurriedFn4<T1, T2, T3,T4, R> {
  (): CurriedFn4<T1, T2, T3, T4, R>;
  (t1: T1): CurriedFn3<T2, T3, T4, R>;
  (t1: T1, t2: T2): CurriedFn2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFn1<T4, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

interface CurriedFn5<T1, T2, T3,T4, T5, R> {
  (): CurriedFn5<T1, T2, T3, T4, T5, R>;
  (t1: T1): CurriedFn4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): CurriedFn3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFn2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFn1<T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

function wrapCurry(fn: (...args: any[]) => any, argsToApply: number, appliedArgs: any[]): (...args: any[]) => any {
  return (...args: any[]) => {
    if (args.length >= argsToApply) {
      return fn.apply(this, [...appliedArgs, ...args]);
    } else {
      return wrapCurry.call(this, fn, argsToApply - args.length, [...appliedArgs, ...args]);
    }
  };
}

export function curry<T1, R>(fn: (t1: T1) => R, arity?: number):
  CurriedFn1<T1, R>;
export function curry<T1, T2, R>(fn: (t1: T1, t2: T2) => R, arity?: number):
  CurriedFn2<T1, T2, R>;
export function curry<T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R, arity?: number):
  CurriedFn3<T1, T2, T3, R>;
export function curry<T1, T2, T3, T4, R>(fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number):
  CurriedFn4<T1, T2, T3, T4, R>;
export function curry<T1, T2, T3, T4, T5, R>(fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number):
  CurriedFn5<T1, T2, T3, T4, T5, R>;
export function curry(fn: (...args: any[]) => any, arity?: number): (...args: any[]) => any {
  const fnArity = typeof arity === 'number' ? arity : fn.length;
  return wrapCurry.call(this, fn, fnArity, []);
}
