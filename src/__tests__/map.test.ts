import { map } from "../index"

describe("map", () => {
  it("is defined", () => {
    expect(map).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = map(item => item * 2, [1, 2])
    const expected = [2, 4]
    expect(received).toEqual(expected)
  })

  it("projection is called with item, index, and data", () => {
    const spy = jest.fn(item => item * 2)
    map(spy, [1, 2])
    expect(spy.mock.calls).toEqual([
      [1, 0, [1, 2]],
      [2, 1, [1, 2]],
    ])
  })

  it("handles curried form", () => {
    const received = map((item: number) => item * 2)([1, 2])
    const expected = [2, 4]
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = [1, 2]
    const received = map(item => item * 2, originalData)
    const expected = [2, 4]
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
