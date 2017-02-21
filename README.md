[![Build Status](https://travis-ci.org/blaketarter/simple-fp.svg?branch=master)](https://travis-ci.org/blaketarter/simple-fp.svg?branch=master)

simple-fp
======

A simple, small, no dependency functional programming library.

## Installation
Using yarn:
```shell
yarn add simple-fp --save
```

using npm:
```shell
npm i simple-fp --save
```

## Usage
```js
var fp = require('simple-fp');

fp([1, 1, 2, 3])
  .unique()
  .forEach(function(num) {
    console.log(num);
  });
// 1, 2, 3
```
