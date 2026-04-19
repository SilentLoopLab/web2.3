function* foo() {
    return 42;
}

const gen = foo();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
