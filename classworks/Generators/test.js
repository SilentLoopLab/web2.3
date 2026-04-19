function* foo() {
    let a = 14;
    let b = 15;
    yield a;
    a++;
    yield b;
    ++b;
    yield a;
}

const gen = foo();

gen.next()
gen.next()
gen.next()
gen.next()
gen.next()
gen.next()
gen.next()