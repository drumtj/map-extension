# Mapx

[![npm version](https://img.shields.io/npm/v/@drumtj/mapx.svg?style=flat)](https://www.npmjs.com/package/@drumtj/mapx)
[![license](https://img.shields.io/npm/l/@drumtj/mapx.svg)](#)

This library is **Map Class Extension**

## Features

- you can set key and value from object or array
- you can change the size of the map with the length property.
- you can clone an object with the clone() method.
- you can use map, filter, reduce like an array.

Arrays have some nice features for manipulating data such as map, forEach, filter, and reduce, but the disadvantage of using loops to check for the inclusion of elements. And objects can find elements quickly using keys, but you have to use loops to process the data, which is inconvenient for handling deep data. Mapx improves on the inconveniences of traditional Map Classes and brings the benefits of arrays and objects.

## Installing

Using npm:

```bash
$ npm install @drumtj/mapx
```

Using cdn:

```html
<script src="https://unpkg.com/@drumtj/mapx@1.0.13/dist/mapx.js"></script>
```

Using amd, commonjS Module

```js
const Mapx = require('@drumtj/mapx');
```

```js
import Mapx from '@drumtj/mapx';
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
map.setObject(objectData); // same -> new Mapx(objectData), return key array
map.setArray1D(arrayData1D); // same -> new Mapx(arrayData1D), return key array
map.setArray2D(arrayData2D); // same -> new Mapx(arrayData2D), return key array

//push and pop like array
//return key
let key = map.push("D");
//return last value;
map.getLastItem(); //["key", "value"]
//remove and return last value
map.pop(); //"value"

//return first value;
map.getFirstItem(); //["key", "value"]
//remove and return first value
map.shift(); //"value"

//find key from value
//return key;
map.indexOf("B");

// Return all item
map.toArray(); // 2D array ([[key, value], ...])

// Return only items ​​whose keys are numeric or string type
map.toObject(); // object

// Return values
map.toValues(); // 1D array

// Retuen keys
map.toKeys(); // 1D array

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
