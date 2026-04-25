const withDefaults = (obj, defaultValue) => {
    return new Proxy(obj, {
        get(target, prop) {
            const isExist = Reflect.has(target, prop);
            if (!isExist) {
                return defaultValue;
            }
            return Reflect.get(target, prop);
        }
    });
};

const user = withDefaults({ name: "Alice" }, "Not provided");

console.log(user.name);
console.log(user.age);

// Expected output:
// "Alice"
// "Not provided"
