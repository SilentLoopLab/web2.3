"use strict";
const car = { brand: 'BMW' };
Object.defineProperty(car, 'id', {
  value: '777-ABC',
  enumerable: false
});

console.log(Object.keys(car));

for (let key in car) {
  console.log(key);
}
console.log(car.id);