function* foo() {
    let id = 1;
    while (true) {
        yield ++id;
    }
}

for (const element of foo()) {
    console.log(element);
}
