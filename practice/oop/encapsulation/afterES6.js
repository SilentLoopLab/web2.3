class BC {
    constructor(name) {
        this.balance = 5000;
        this.name = name;
    }
    get balance() {
        return this.balance;
    }
    set balance(money) {
        if (money <= 0) {
            throw new Error("Money can't be negative number");
        }
        this.balance +=money;
    }
}

let card1 = new BC("Joe");
let card2 = new BC("John");

console.log(card1);
console.log(card1.balance);

