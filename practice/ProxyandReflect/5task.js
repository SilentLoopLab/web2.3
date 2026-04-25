const account = { username: "bob", _password: "supersecret123", balance: 100 };

const secureAccount = new Proxy(account, {
    get(target, prop) {
        if (prop.startsWith('_')) return undefined;
        return Reflect.get(target, prop);
    },
    has(target, prop) {
        if (prop.startsWith('_')) return false;
        return Reflect.has(target, prop);
    },
    ownKeys(target) {
        const arrLikeKeys = Object.keys(target).filter(e => !e.startsWith('_'));
        return arrLikeKeys;
    }
});

console.log(secureAccount._password);
console.log("_password" in secureAccount);
console.log(Object.keys(secureAccount));

// Expected output:
// undefined
// false
// ["username", "balance"]
