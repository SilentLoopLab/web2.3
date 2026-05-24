import selectionSort from "./selection.js";
import bubbleSort from "./bubble.js";
import insertionSort from "./insertion.js";
import countingSort from "./counting.js";

let arr = new Array(100000);

for (let i = 0; i < 100000; ++i) {
    arr[i] = Math.floor(Math.random() * 50000000 + 1);
}

let now = Date.now();
let res = countingSort(arr);
console.log(Date.now() - now);
console.log(res);
