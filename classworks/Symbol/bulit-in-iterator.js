let arr = [1, 2, 3];
let iter = arr[Symbol.iterator]();

// for (const v of arr) {
//     console.log(v);
// }
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());