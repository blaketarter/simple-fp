const { skip } = require("../dist")

describe("skip", () => {
  it("is defined", () => {
    expect(skip).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = skip(2, [1, 2, 3, 4, 5])
    const expected = [3, 4, 5]
    expect(received).toEqual(expected)
  })

  it("handles curried form", () => {
    const received = skip(2)([5, 4, 3, 2, 1])
    const expected = [3, 2, 1]
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = [1, 2, 3, 4, 5]
    const received = skip(2, originalData)
    const expected = [3, 4, 5]
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
