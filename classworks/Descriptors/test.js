'use strict';
const gadget = {};

Object.defineProperty(gadget, 'id', {
  get() { return 'A-100'; },
  configurable: true
});

Object.defineProperty(gadget, 'id', {
  value: 'B-200'
});

const desc = Object.getOwnPropertyDescriptor(gadget, 'id');
console.log(gadget.id);
console.log(desc.writable);
console.log(desc.enumerable);