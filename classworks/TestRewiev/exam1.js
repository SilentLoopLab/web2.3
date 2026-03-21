// console.log(1, foo);
// var foo = 5;

// function makeCounter(x) {
//   return function (y) {
//     x += y;
//     console.log(2, x);
//     return x;
//   };
// }

// let counter1 = makeCounter(2);
// let counter2 = makeCounter(3);
// console.log(3, counter1(3));
// console.log(4, counter2(1));
// console.log(5, counter1(3));

// function test() {
//   console.log(6, bar);
//   var bar = 10;
// }
// test();

// const arr = [10, 20, 30];
// arr[100] = 40;
// arr["arr"] = 42;
// console.log(arr.length);

// console.log(Number(1n))


// function my_every(arr, fn) {
//     let size = arr.length;
//     for (let i = 0; i < size; ++i) {
//         if (!fn(arr[i], i, arr)) {
//             return false;
//         }
//     }
//     return true;
// }

// const arr = [1, 2, 3];
// arr["num"] = 5;

// console.log(arr.every(45));
// console.log(my_every(arr,console.log));


// let arr = ["apple", "banana", "hi"];

// function foo(arr) {
//     let newObj = {};
//     for (let i = 0; i < arr.length; ++i) {
//         newObj[i] = `length ${arr[i].length}`;
//     }
//     return newObj;
// }

// console.log(foo(arr));

// function reverse(n) {
//     let flag = 0;
//     n < 0 ? flag = true : flag = false;
//     n = Math.abs(n);
//     let res = 0;
//     while (n) {
//         res = res * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     if (flag) return res * -1;
//     return res;
// }

// console.log(reverse(-1000));