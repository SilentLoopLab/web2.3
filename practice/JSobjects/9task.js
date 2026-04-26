let d = new Date();


console.log(d.setDate(d.getDate() + 5));
const expectedDiff = 5 * 24 * 60 * 60 * 1000;
const actualDiff = d.getTime() - new Date().getTime();
console.log("Task 9:", actualDiff >= expectedDiff - 1000); // 1 second tolerance allowed