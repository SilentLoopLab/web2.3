function Bank(name) {
    let balance = 5000;
    return {
        name: name,
        withdraw: function (money) {
            if (money > balance) {
                console.log(`Your balance is ${balance}`);
                return;
            }
            balance -= money;
        },
        getBalance: function () {
            return balance;
        },
        deposit: function (money) {
            if (money <= 0) return;
            balance += money;
        },
    };
}

let obj = new Bank("Joe");
console.log(obj.getBalance());
