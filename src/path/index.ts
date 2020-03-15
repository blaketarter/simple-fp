import { curry } from "../curry/index"
import { flip } from "../flip/index"
import { prop } from "../prop/index"
import { reduce } from "../reduce/index"

function _path<T extends object, R extends any>(propPath: string, data: T): R {
  return reduce(flip(prop), data, propPath.split("."))
}

interface PathFn {
  <T extends object, R extends any>(propPath: string): (data: T) => R
  <T extends object, R extends any>(propPath: string, data: T): R
}

export const path: PathFn = curry(_path, 2)
