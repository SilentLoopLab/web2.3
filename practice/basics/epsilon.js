function myEqual(num1, num2) {
    return num1 - num2 < Number.EPSILON;
}

console.log(myEqual(0.1 + 0.2, 0.3));
