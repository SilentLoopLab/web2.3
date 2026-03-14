export const myIsInteger = (n) => {
    return (
        typeof n === "number"
        && n % 1 === 0
        && Math.abs(n) !== Infinity
    );
};

console.log(myIsInteger(0));
console.log(Number.isInteger(0));
