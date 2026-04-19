const obj = {
    start: 1,
    to: 3,
    [Symbol.iterator]() {
        let cur = this.start;
        return {
            next: () => {
                if (cur <= this.to) {
                    return { value: cur++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
            [Symbol.iterator]() {
                return this;
            },
        };
    },
};

const obj1 = {
    start: 1,
    to: 3,
    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.to; ++i) {
            yield this[i];
        }
    },
};

for (const v of obj1) {
    console.log(v);
}

for (const v of obj) {
    console.log(v);
}
