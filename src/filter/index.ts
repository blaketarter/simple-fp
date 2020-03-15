import { curry } from "../curry/index"
import { reduce } from "../reduce/index"

interface PredicateFn<T> {
  (x: T, y: number, z: T[]): boolean
}

function _filter<T>(predicate: PredicateFn<T>, data: T[]): T[] {
  return reduce(
    (newData, item, index) => {
      if (predicate(item, index, data)) {
        newData.push(item)
      }
      return newData
    },
    [],
    data,
  )
}

interface FilterFn {
  <T>(projection: PredicateFn<T>): (data: T[]) => T[]
  <T>(projection: PredicateFn<T>, data: T[]): T[]
}

export const filter: FilterFn = curry(_filter, 2)
