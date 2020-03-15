import { prop } from "../dist"

describe("prop", () => {
  it("is defined", () => {
    expect(prop).toBeDefined()
  })

  it("returns the expected data", () => {
    const received = prop("a", { a: { b: { c: "foo" } } })
    const expected = { b: { c: "foo" } }
    expect(received).toEqual(expected)
  })

  it("handles curried form", () => {
    const received = prop("a")({ a: { b: { c: "foo" } } })
    const expected = { b: { c: "foo" } }
    expect(received).toEqual(expected)
  })

  it("does not mutate the original data", () => {
    const originalData = { a: { b: { c: "foo" } } }
    const received = prop("a", { a: { b: { c: "foo" } } })
    const expected = { b: { c: "foo" } }
    expect(received).not.toBe(originalData)
    expect(received).not.toEqual(originalData)
    expect(received).toEqual(expected)
  })
})
