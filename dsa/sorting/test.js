import selectionSort from "./selection.js";
import bubbleSort from "./bubble.js";
import insertionSort from "./insertion.js";
import countingSort from "./counting.js";
import cumulative from "./cumulative.js";

let arr = [
    { name: "Tiko", age: 12 },
    { name: "Ano", age: 46 },
    { name: "Vaxo", age: 2 },
    { name: "Gago", age: 37 },
    { name: "Samo", age: 56 },
    { name: "Javier Mascherano", age: 14 },
];

console.log(bubbleSort(arr, (a, b) => {
    if (a.name > b.name) return 1;
    return 0;
}));
