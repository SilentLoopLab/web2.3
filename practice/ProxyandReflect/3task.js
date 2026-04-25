class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const productProxy = new Proxy(new Product(), {
    set(target, prop, newValue) {
        if (
            typeof newValue === "string" ||
            (typeof newValue === "number" && newValue < 0)
        ) {
            throw new TypeError();
        }
        return Reflect.set(target, prop, newValue);
    },
});
productProxy.price = 1200;
// productProxy.price = null;
console.log(productProxy.price);

// productProxy.price = -50; // Should throw TypeError
// Should throw TypeError

// Expected output:
// 1200
