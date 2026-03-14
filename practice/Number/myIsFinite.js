function myIsFinite(num) {
    return (
        typeof num === "number" &&
        !Number.isNaN(num) &&
        num !== +Infinity &&
        num !== -Infinity
    );
}

const num = 10;
console.log(Number.isFinite(num));
console.log(myIsFinite(num));
