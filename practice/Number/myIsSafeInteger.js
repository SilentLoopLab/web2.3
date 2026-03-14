// import { myIsInteger } from "./myIsInteger";
function myIsSafeInteger(n) {
    return (
        Number.isInteger(n)
        && Math.abs(n) < 2 ** 53
    );
}

const num = 5;
console.log(myIsSafeInteger(0.8));
console.log(Number.isSafeInteger(0.8));

