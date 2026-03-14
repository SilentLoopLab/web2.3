function wrapper() {
    let memo = [];
    return function factorial(n) {
        if (n <= 1) return 1;
        if (memo[n]) return memo[n];
        console.log(n);
        return memo[n] = n * factorial(n - 1);
    }
}

let fact = wrapper();

console.log(1, fact(5));
console.log(2, fact(5));
console.log(3, fact(5));
console.log(4, fact(5));