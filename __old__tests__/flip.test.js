import { flip } from "../dist"

describe("flip", () => {
  const append2 = (a, b) => a + b
  const append3 = (a, b, c) => append2(append2(a, b), c)

  it("is defined", () => {
    expect(flip).toBeDefined()
  })

  it("calls the function with the first two args flipped", () => {
    const received = flip(append2, "b", "a")
    const expected = "ab"
    expect(received).toEqual(expected)
  })

  it("only flips the first two args", () => {
    const received = flip(append3, "b", "a", "c")
    const expected = "abc"
    expect(received).toEqual(expected)
  })

  it("handles curried form", () => {
    const received = flip(append2)("b", "a")
    const expected = "ab"
    expect(received).toEqual(expected)
  })
})
