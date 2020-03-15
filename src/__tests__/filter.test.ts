import { filter } from "../index"

describe("filter", () => {
  it("is defined", () => {
    expect(filter).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = filter(item => item > 1, [1, 2])
    const expected = [2]
    expect(received).toEqual(expected)
  })

  it("projection is called with item, index, and data", () => {
    const spy = jest.fn(item => item > 1)
    filter(spy, [1, 2])
    expect(spy.mock.calls).toEqual([
      [1, 0, [1, 2]],
      [2, 1, [1, 2]],
    ])
  })

  it("handles curried form", () => {
    const received = filter((item: number) => item > 1)([1, 2])
    const expected = [2]
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = [1, 2]
    const received = filter(item => item > 1, originalData)
    const expected = [2]
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
