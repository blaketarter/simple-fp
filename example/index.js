const fp = require("simple-fp")

const exampleFn1 = str => {
  return fp.compose(
    fp.reduce((x, y) => x + y, 0),
    fp.map(x => parseInt(x)),
  )(str.split(""))
}

const exampleFn2 = fp.compose(
  fp.reduce((x, y) => x + y, 0),
  fp.map(x => x + 1),
  fp.map(fp.path("value")),
)

module.exports = {
  exampleFn1,
  exampleFn2,
}
