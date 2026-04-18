const obj = {
    name: "Joe"
}

// different file
//import obj
var sym1 = Symbol.for('id');
obj[sym1] = 'A--999';
//differnet file
//import obj
var sym2 = Symbol.for('id');
obj[sym2] = 'B--256';


// console.log(obj);
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj);
// for (const [key,value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
// }