const arr = new Array(70 + 1).fill(0);
arr[arr.length - 1] = -1;
function fib(n) {
    if (n < 0) return -1;
    if (n <= 1) return n;
    if (arr[n] !== -1 && arr[n] !== 0) return arr[n];
    return arr[n] = fib(n - 1) + fib(n - 2);
}

let n = 70;
console.log(fib(n));
