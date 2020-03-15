import { reduce } from "../dist"

describe("reduce", () => {
  it("is defined", () => {
    expect(reduce).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = reduce((a, b) => a + b, 0, [1, 2])
    const expected = 3
    expect(received).toEqual(expected)
  })

  it("combiner is call with accumulator, item, index, and data", () => {
    const spy = jest.fn((a, b) => a + b)
    reduce(spy, 0, [1, 2])
    expect(spy.mock.calls).toEqual([
      [0, 1, 0, [1, 2]],
      [1, 2, 1, [1, 2]],
    ])
  })

  it("handles curried form", () => {
    const received = reduce((a, b) => a + b, 0)([1, 2])
    const expected = 3
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = [1, 2]
    const received = reduce((a, b) => a + b, 0)([1, 2])
    expect(received).not.toBe(originalData)
    expect(originalData).toEqual([1, 2])
  })
})
