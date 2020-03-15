import { curry } from "../curry/index"
import { reduce } from "../reduce/index"

function _take<T>(amount: number, data: T[]): T[] {
  return reduce(
    (newData, item, index) => {
      if (index < amount) {
        newData.push(item)
      }
      return newData
    },
    [],
    data,
  )
}

interface TakeFn {
  <T>(amount: number): (data: T[]) => T[]
  <T>(amount: number, data: T[]): T[]
}

export const take: TakeFn = curry(_take, 2)
