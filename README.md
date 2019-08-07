# Datex

[![npm version](https://img.shields.io/npm/v/@drumtj/mapx.svg?style=flat)](https://www.npmjs.com/package/@drumtj/mapx)
[![license](https://img.shields.io/npm/l/@drumtj/mapx.svg)](#)

This library is **Map Class Extension**

## Features

- settable key, value from object or array to Map
-

## Installing

Using npm:

```bash
$ npm install @drumtj/mapx
```

Using cdn:

```html
<script src="https://unpkg.com/@drumtj/datex@1.0.1/dist/mapx.js"></script>
```

Using amd, commonjS Module

```js
const Datex = require('@drumtj/mapx');
```

```js
import Datex from '@drumtj/mapx';
```

## Example

```js
/////////////////////////////////////
/// Function of Existing Map Class
/////////////////////////////////////

var map = new Mapx();
var keyString = 'A';
var keyObject = {};
var keyFunc = function(){};

// set value
map.set(keyString, "the value connected with key string");
map.set(keyObject, "the value connected with key object");
map.set(keyFunc, "the value connected with key function");

// get value
map.get(keyString); // "the value connected with key string"
map.get(keyObject); // "the value connected with key object"
map.get(keyFunc); // "the value connected with key function"

// check value
map.has(keyString)

// delete value
map.delete(keyString);

// get length
map.size;

// loop
for(let [key, value] of map.entries()){
  console.log({key, value});
}

map.forEach((value, key, map)=>{
  console.log({value, key, map});
})

// clear
map.clear();


/////////////////////////////////////
/// Extended Features
/////////////////////////////////////
var objectData = {
  name: "tj",
  age: "?"
}
//value sequence
var arrayData1D = [
  'A', 'B', 'C'
];
//[key, value] sequence
var arrayData2D = [
  [65, 'A'], [66, 'B'], [67, 'C']
];
//map = new Mapx(data);
map.setObject(objectData); // same -> new Mapx(objectData)
map.setArray1D(arrayData1D); // same -> new Mapx(arrayData1D)
map.setArray2D(arrayData2D); // same -> new Mapx(arrayData2D)

// Return all values
map.toArray(); // 2D array ([[key, value], ...])

// Return only values ​​with numeric or letter keys
map.toObject(); // object

// create clone
map.clone();

// return Mapx, like Array.prototype.map
var rmap = map.map(function(value, key, map){
  return value + 1;
})

// return array, same Array.prototype.map
var arr = map.mapToArray(function(value, key, array){
  return value + 1;
})

// return Mapx, like Array.prototype.filter
var rmap = map.filter(function(value, key, map){
  return value !== 'B';
})

// return array, same Array.prototype.filter
var arr = map.filterToArray(function(value, key, array){
  return value !== 'B';
})

//set/get length
map.length = map.length - 2;
```


## License

MIT
