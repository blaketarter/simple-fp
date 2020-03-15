const { exampleFn1, exampleFn2 } = require("./index")

describe("install test", () => {
  it("exampleFn1 works", () => {
    const result = exampleFn1("12345")

    expect(result).toBe(15)
  })

  it("exampleFn2 works", () => {
    const result = exampleFn2([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
    ])

    expect(result).toBe(20)
  })
})
