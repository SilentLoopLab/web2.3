const obj = {
    name: "Joe"
}

// different file
//import obj

obj[Symbol('id')] = 'A--999';
//differnet file
//import obj
obj[Symbol('id')] = 'B--256';


// console.log(obj);
console.log(Object.getOwnPropertySymbols(obj))
// for (const [key,value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
// }