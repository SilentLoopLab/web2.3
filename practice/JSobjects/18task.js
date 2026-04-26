const map = new Map([["x", 1], ["y", 2], ["z", 3]]);
let sum = 0;
for (const [_, value] of map) {
    console.log(value);
    sum += value;
}

console.log("Task 18:", sum === 6);

