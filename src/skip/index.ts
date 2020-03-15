import { curry } from "../curry/index"
import { reduce } from "../reduce/index"

function _skip<T>(amount: number, data: T[]): T[] {
  return reduce(
    (newData, item, index) => {
      if (index > amount - 1) {
        newData.push(item)
      }
      return newData
    },
    [] as T[],
    data,
  )
}

interface SkipFn {
  <T>(amount: number): (data: T[]) => T[]
  <T>(amount: number, data: T[]): T[]
}

export const skip: SkipFn = curry(_skip, 2)
