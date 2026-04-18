class Person {
    #age = 18;
    constructor(name) {
        this.name = name;
    }

    get age() {
        return this.#age;
    }
}

class Developer extends Person {
    constructor(name, stack) {
        super(name);
        this.stack = stack;
    }
    [Symbol.iterator]() {
        let curObject = this;
        let keys = [];
        let self = this;
        while (curObject && curObject !== Object.prototype) {
            let curKeys = Object.getOwnPropertyNames(curObject);
            for (const key of curKeys) {
                if (typeof key !== "function" && key !== "constructor") {
                    keys.push(key);
                }
            }
            curObject = Object.getPrototypeOf(curObject);
        }
        
        let idx = 0;
        return {
            next() {
                let key = keys[idx];
                let val = self[key];
                if (idx < keys.length) {
                    idx++;
                    return { value: [key, val], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
            [Symbol.iterator]() {
                return this;
            },
        };
    }
}

const dev = new Developer("Joe", "C++");

Array.prototype[Symbol.toPrimitive] = function() {

}
for (const [key, val] of dev) {
    console.log(`${key}: ${val}`);
}
