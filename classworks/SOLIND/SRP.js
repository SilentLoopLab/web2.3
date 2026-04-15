class Order {
    constructor(items, email) {
        this.items = items;
        this.email = email;
    }

    calculateTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    saveToDatabase() {
        console.log("Order to DB...");
    }

    sendConfirmationEmail() {
        console.log(`MSG send: ${this.email}`);
    }
}

// ______________________________________

class Order {
    constructor(items, email) {
        this.items = items;
        this.email = email;
    }
}

class OrderCalculator {
    static calculateTotal(order) {
        return order.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class OrderRepository {
    save(order) {
        console.log("Order to DB...");
    }
}

class EmailService {
    sendOrderConfirmation(email) {
        console.log(`MSG send: ${email}`);
    }
}
