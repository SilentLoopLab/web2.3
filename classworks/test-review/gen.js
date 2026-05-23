function* foo() {
    let a = yield 10;
    console.log(a);
}

const gen = foo();
console.log(gen.next());
console.log(gen.next(20));