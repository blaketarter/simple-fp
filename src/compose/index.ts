import { reduce } from "../reduce/index"
import { reverse } from "../reverse/index"

export function compose(...fns: Function[]): (data: any) => any {
  return data => {
    return reduce(
      (acc, fn) => {
        return fn(acc)
      },
      data,
      reverse(fns),
    )
  }
}
