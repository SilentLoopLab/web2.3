const isPrime = (n) => {
    if (n === 2) return true;
    if (n < 2 || n % 2 === 0) return false;

    for (let i = 3; i < Math.sqrt(n) + 1; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

const gen = function* (start, end) {
    if (start > end) return;
    while (start <= end) {
        if (isPrime(start)) yield start;
        ++start;
    }
}

const a = gen(1,7);

console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())