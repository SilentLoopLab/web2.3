function* incrementCounter() {
    let id = 500;
    while (true) {
        yield ++id;
    }
}

const gen = incrementCounter();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

