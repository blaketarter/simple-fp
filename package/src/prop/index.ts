import { curry } from "../curry/index"

function _prop<T extends { [key: string]: R }, R extends any>(
  propPath: string,
  data: T,
): R {
  return data[propPath]
}

interface PropFn {
  <T extends { [key: string]: R }, R extends any>(propPath: string): (
    data: T,
  ) => R
  <T extends { [key: string]: R }, R extends any>(propPath: string, data: T): R
}

export const prop: PropFn = curry(_prop, 2)
