function* foo() {
    console.log("First next");
    yield 1;
    console.log("Second next");
    yield 2;
    console.log("Third next");
    yield 3;
    console.log("Fourth next");
    return "Final";
}

const gen = foo();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

