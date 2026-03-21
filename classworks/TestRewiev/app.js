console.log(1, foo);
var foo = 5;

function makeCounter(x) {
  return function (y) {
    x += y;
    console.log(2, x);
    return x;
  };
}

let counter1 = makeCounter(2);
let counter2 = makeCounter(3);
console.log(3, counter1(3));
console.log(4, counter2(1));
console.log(5, counter1(3));

function test() {
  console.log(6, bar);
  var bar = 10;
}
test();

const arr = [10, 20, 30];
arr[100] = 40;
arr["arr"] = 42;
console.log(arr.length);