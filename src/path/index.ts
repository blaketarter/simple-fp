import { curry } from "../curry/index"
import { flip } from "../flip/index"
import { prop } from "../prop/index"
import { reduce } from "../reduce/index"

function _path<T>(propPath: string, data: T): T {
  return reduce(flip(prop), data, propPath.split("."))
}

interface PathFn {
  <T>(propPath: string): (data: T) => T
  <T>(propPath: string, data: T): T
}

export const path: PathFn = curry(_path, 2)
