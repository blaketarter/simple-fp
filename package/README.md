[![Build Status](https://github.com/blaketarter/simple-fp/workflows/CI/badge.svg)](https://github.com/blaketarter/simple-fp/actions)

# simple-fp

A simple, small, no dependency functional programming library.

## Installation

Using yarn:

```shell
yarn add simple-fp --save
```

using npm:

```shell
npm i simple-fp
```

## Usage

```js
const { unique } = require("simple-fp")

unique([1, 1, 2, 3]).forEach(function(num) {
  console.log(num)
})
// 1, 2, 3
```
