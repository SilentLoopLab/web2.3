function* fact() {
    let idx = 1;
    let res = 1;
    while (true) {
        res *= idx++;
        yield res;
    }
}

const gen = fact();
var [fact1, fact2, fact3, fact4, fact5] = gen();
console.log(fact1, fact2, fact3, fact4, fact5);

