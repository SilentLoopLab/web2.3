// class Person {
//     #age = 18;
//     constructor(name) {
//         this.name = name;
//     }
//     get age() {
//         return this.#age;
//     }
// }

// class Developer extends Person {
//     constructor(name, stack) {
//         super(name);
//         this.stack = stack;
//     }
//     *[Symbol.iterator]() {
//         let curObj = this;
//         let s = {};
//         while (curObj && curObj !== Object.prototype) {
//             const curKeys = Object.getOwnPropertyNames(curObj);
//             for (const key of curKeys) {
//                 if (
//                     typeof key !== "function" &&
//                     !s[key] &&
//                     key !== "constructor"
//                 ) {
//                     s[key] = 1;
//                     yield [key, this[key]];
//                 }
//             }
//             curObj = Object.getPrototypeOf(curObj);
//         }
//     }
// }

// const dev = new Developer("Joe", "C++");

// for (const [key, val] of dev) {
//     console.log(`${key}: ${val}`);
// }

// const arr = new Array(1, 2, 4, 3);

// Array.prototype[Symbol.iterator] = function* () {
//     for (let i = 0; i < this.length; ++i) {
//         yield [i,this[i]];
//     }
// };

// for (const value of arr) {
//     console.log(value);
// }