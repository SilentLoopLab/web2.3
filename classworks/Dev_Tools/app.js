let btn = document.getElementById('btn');

class MyCustomType {
    constructor() {
        this.smi = 5;
        this.number = Number.MAX_SAFE_INTEGER;
        this.string = "James";
        this.true = true;
        this.false = false;
        this.undefined = undefined;
        this.null = null;
        this.symbol = Symbol('42');
        this.bigint = 5n;
        this.obj1 = {name: "James", age: 42};
        this.obj2 = {name: "Joe", age: 42};
        this.arr = [];
    }
}

btn.onclick = function foo() {
    obj = new MyCustomType();
}