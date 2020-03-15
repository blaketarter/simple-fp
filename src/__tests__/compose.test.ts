import { compose } from "../index"

describe("compose", () => {
  it("is defined", () => {
    expect(compose).toBeDefined()
  })

  it("calls each function", () => {
    const first = jest.fn((a: string[]) => [...a, "1st"])
    const second = jest.fn((a: string[]) => [...a, "2nd"])
    const third = jest.fn((a: string[]) => [...a, "3rd"])

    const places = compose(third, second, first)

    places([])

    expect(first.mock.calls).toEqual([[[]]])
    expect(second.mock.calls).toEqual([[["1st"]]])
    expect(third.mock.calls).toEqual([[["1st", "2nd"]]])
  })

  it("calls each function in the correct order and returns the data", () => {
    const first = (a: string[]) => [...a, "1st"]
    const second = (a: string[]) => [...a, "2nd"]
    const third = (a: string[]) => [...a, "3rd"]

    const places = compose(third, second, first)

    const received = places([])
    const expected = ["1st", "2nd", "3rd"]
    expect(received).toEqual(expected)
  })
})
