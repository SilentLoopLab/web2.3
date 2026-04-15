// "use strict";
const tool = {};
Object.defineProperty(tool, "version", {
  writable: false,
  configurable: false,
});

Object.defineProperty(tool, "version", { enumerable: true });
console.log(Object.getOwnPropertyDescriptors(tool));
