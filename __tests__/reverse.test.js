const { reverse } = require("../dist")

describe("reverse", () => {
  it("is defined", () => {
    expect(reverse).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = reverse([1, 2])
    const expected = [2, 1]
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = [1, 2]
    const received = reverse(originalData)
    const expected = [2, 1]
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
