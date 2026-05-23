import selectionSort from "./selection.js";
import bubbleSort from "./bubble.js";
import insertionSort from "./insertion.js";
let arr1 = new Array(10000)
let arr2 = new Array(10000)
for (let i = 0; i < arr1.length; ++i) {
    arr1[i] = Math.floor(((Math.random() * 100000)));
}
for (let i = 0; i < arr2.length; ++i) {
    arr2[i] = i;
}

let now = Date.now();
bubble(arr1);
console.log(Date.now() - now);
console.log(arr1);