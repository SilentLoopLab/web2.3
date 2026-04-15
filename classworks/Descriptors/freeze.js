'use strict';

const iceCube = {
  content: "Water",
  temp: 0
};

Object.freeze(iceCube);

// iceCube.temp = -10; // TypeError: Cannot assign to read only property 'temp'
// iceCube.isSolid = true; // TypeError
// delete iceCube.content; // TypeError

console.log(iceCube); // { content: "Water", temp: 0 }