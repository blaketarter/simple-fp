import { curry } from "../curry/index"
import { reduce } from "../reduce/index"

interface ProjectionFn<T, U> {
  (x: T, y: number, z: T[]): U
}

function _map<T, U>(projection: ProjectionFn<T, U>, data: T[]): U[] {
  return reduce(
    (newData, item, index) => {
      newData.push(projection(item, index, data))
      return newData
    },
    [] as U[],
    data,
  )
}

interface MapFn {
  <T, U>(projection: ProjectionFn<T, U>): (data: T[]) => U[]
  <T, U>(projection: ProjectionFn<T, U>, data: T[]): U[]
}

export const map: MapFn = curry(_map, 2)
