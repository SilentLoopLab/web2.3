let obj = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        let cur = this.from;
        let fin = this.to;
        return {
            next() {
                if (cur <= fin) {
                    return { value: cur++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};

const iter = obj[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
