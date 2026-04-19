function* foo() {
    const name = yield 'We starting interview. What\'s your name?'
    const resp = yield `Nice to meet you ${name}`;
    console.log(resp);
}

const gen = foo();

console.log(gen.next().value);
console.log(gen.next('Joe Doe'));
console.log(gen.next());
console.log(gen.next("Nice to meet you generator jan:"));
