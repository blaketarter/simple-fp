import { curry } from "../index"

describe("curry", () => {
  const arity1 = (a: string) => a
  const arity2 = (a: string, b: string) => a + b
  const arity3 = (a: string, b: string, c: string) => a + b + c
  const arity4 = (a: string, b: string, c: string, d: string) => a + b + c + d
  const arity5 = (a: string, b: string, c: string, d: string, e: string) =>
    a + b + c + d + e

  it("is defined", () => {
    expect(curry).toBeDefined()
  })

  it("currying a function does not throw an error", () => {
    const arity2C = curry(arity2, 2)
    expect(arity2C).toBeDefined()
  })

  it("handles functions with an arity of 1", () => {
    const arity1C = curry(arity1, 1)
    expect(arity1C("foo")).toBe("foo")
  })

  it("handles the curried function being passed around and reused", () => {
    const arity3C = curry(arity3, 3)
    const fooBar = arity3C("foo", "bar")
    expect(fooBar("baz")).toBe("foobarbaz")
    expect(fooBar("bang")).toBe("foobarbang")
  })

  it("handles being called with more args than expected", () => {
    const arity3C = curry(arity3, 2)
    expect(arity3C("foo")("bar", "baz")).toBe("foobarbaz")
  })

  describe("handles functions with an arity of 2", () => {
    it("can be called like normal", () => {
      const arity2C = curry(arity2, 2)
      expect(arity2C("foo", "bar")).toBe("foobar")
    })

    it("can be called in curried form", () => {
      const arity2C = curry(arity2, 2)
      expect(arity2C("foo")("bar")).toBe("foobar")
    })

    it("can be called in curried form after being called witout args", () => {
      const arity2C = curry(arity2, 2)
      expect(arity2C()("foo")("bar")).toBe("foobar")
    })

    it("can be called in different forms multiple times", () => {
      const arity2C = curry(arity2, 2)
      expect(arity2C("foo", "bar")).toBe("foobar")
      expect(arity2C("foo")("bar")).toBe("foobar")
      expect(arity2C()("foo")("bar")).toBe("foobar")
    })
  })

  describe("handles functions with an arity of 3", () => {
    it("can be called like normal", () => {
      const arity3C = curry(arity3, 3)
      expect(arity3C("foo", "bar", "baz")).toBe("foobarbaz")
    })

    it("can be called in curried form", () => {
      const arity3C = curry(arity3, 3)
      expect(arity3C("foo")("bar")("baz")).toBe("foobarbaz")
    })

    it("can be called in curried form after being called witout args", () => {
      const arity3C = curry(arity3, 3)
      expect(arity3C()("foo")("bar")("baz")).toBe("foobarbaz")
    })

    it("can be called in different forms multiple times", () => {
      const arity3C = curry(arity3, 3)
      expect(arity3C("foo", "bar", "baz")).toBe("foobarbaz")
      expect(arity3C("foo")("bar")("baz")).toBe("foobarbaz")
      expect(arity3C()("foo")("bar")("baz")).toBe("foobarbaz")
    })
  })

  describe("handles functions with an arity of 4", () => {
    it("can be called like normal", () => {
      const arity4C = curry(arity4, 4)
      expect(arity4C("foo", "bar", "baz", "quan")).toBe("foobarbazquan")
    })

    it("can be called in curried form", () => {
      const arity4C = curry(arity4, 4)
      expect(arity4C("foo")("bar")("baz")("quan")).toBe("foobarbazquan")
    })

    it("can be called in curried form after being called witout args", () => {
      const arity4C = curry(arity4, 4)
      expect(arity4C()("foo")("bar")("baz")("quan")).toBe("foobarbazquan")
    })

    it("can be called in different forms multiple times", () => {
      const arity4C = curry(arity4, 4)
      expect(arity4C("foo", "bar", "baz", "quan")).toBe("foobarbazquan")
      expect(arity4C("foo")("bar")("baz")("quan")).toBe("foobarbazquan")
      expect(arity4C()("foo")("bar")("baz")("quan")).toBe("foobarbazquan")
    })
  })

  describe("handles functions with an arity of 5", () => {
    it("can be called like normal", () => {
      const arity5C = curry(arity5, 5)
      expect(arity5C("foo", "bar", "baz", "quan", "quaan")).toBe(
        "foobarbazquanquaan",
      )
    })

    it("can be called in curried form", () => {
      const arity5C = curry(arity5, 5)
      expect(arity5C("foo")("bar")("baz")("quan")("quaan")).toBe(
        "foobarbazquanquaan",
      )
    })

    it("can be called in curried form after being called witout args", () => {
      const arity5C = curry(arity5, 5)
      expect(arity5C()("foo")("bar")("baz")("quan")("quaan")).toBe(
        "foobarbazquanquaan",
      )
    })

    it("can be called in different forms multiple times", () => {
      const arity5C = curry(arity5, 5)
      expect(arity5C("foo", "bar", "baz", "quan", "quaan")).toBe(
        "foobarbazquanquaan",
      )
      expect(arity5C("foo")("bar")("baz")("quan")("quaan")).toBe(
        "foobarbazquanquaan",
      )
      expect(arity5C()("foo")("bar")("baz")("quan")("quaan")).toBe(
        "foobarbazquanquaan",
      )
    })
  })
})
