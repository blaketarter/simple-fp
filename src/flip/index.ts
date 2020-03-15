import { curry } from "../curry/index"

function _flip(fn: Function, ...args: any[]): any {
  const [b, a, ...rest] = args
  return fn.call(this, a, b, ...rest)
}

interface FlipFn {
  (fn: Function): (...args) => any
  (fn: Function, ...args: any[]): any
}

export const flip: FlipFn = curry(_flip, 2)
