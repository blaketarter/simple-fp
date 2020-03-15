import { path } from "../dist"

describe("path", () => {
  it("is defined", () => {
    expect(path).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = path("a.b.c", { a: { b: { c: "foo" } } })
    const expected = "foo"
    expect(received).toEqual(expected)
  })

  it("handles curried form", () => {
    const received = path("a.b.c")({ a: { b: { c: "foo" } } })
    const expected = "foo"
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = { a: { b: { c: "foo" } } }
    const received = path("a.b.c", originalData)
    const expected = "foo"
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
