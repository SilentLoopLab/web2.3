class PaymentProcessor {
    pay(type, amount) {
        if (type === "card") {
            console.log(`Paymenty with card: ${amount}`);
        } else if (type === "paypal") {
            console.log(`Payment with PayPal: ${amount}`);
        } else if (type === "cash") {
            console.log(`Payment with cash: ${amount}`);
        } else {
            throw new Error("Somthing went wrong");
        }
    }
}

//__________________________________
class IPayment {
    pay() {

    }
}
class CardPayment{
    pay(amount) {
        console.log(`Payment with card: ${amount}`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Payment with PayPal: ${amount}`);
    }
}

class CashPayment {
    pay(amount) {
        console.log(`Payment with cash: ${amount}`);
    }
}
class IDramPayment {
    pay(amount) {
        console.log(`Payment with IDram: ${amount}`);
    }
}
class PaymentProcessor {
    pay(paymentMethod, amount) {
        paymentMethod.pay(amount);
    }
}
