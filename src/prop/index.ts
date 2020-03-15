import { curry } from "../curry/index"

function _prop<T>(propPath: string, data: T): T {
  return data[propPath]
}

interface PropFn {
  <T>(propPath: string): (data: T) => T
  <T>(propPath: string, data: T): T
}

export const prop: PropFn = curry(_prop, 2)
