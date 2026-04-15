class NotificationCenter {
    #apps = [];
    subscribe(app) {
        if (!(app instanceof App)) {
            return;
        }
        if (this.#apps.includes(app)) {
            return "Already subscribed";
        }
        this.#apps.push(app);
        return "App subscribed";
    }
    unsubscribe(app) {
        if (!this.#apps.includes(app)) {
            return "app is not found";
        }
        this.#apps = this.#apps.filter((e) => e !== app);
        return "Your application is unsubscribed";
    }
    notifyAll(n) {
        this.#apps.forEach((e) => e.recive(n));
    }
}

class App {
    constructor() {
        if (new.target === App) {
            throw new Error("");
        }
    }
    recive(n) {
        throw new Error("Method must be implemented");
    }
}

class Instagram extends App {
    constructor(name) {
        super();
        this.name = name;
    }
    recive(n) {
        console.log(`${this.name} recive: ${n}`);
    }
}

class Telegram extends App {
    constructor(name) {
        super();
        this.name = name;
    }
    recive(n) {
        console.log(`${this.name} recive: ${n}`);
    }
}

class Facebook extends App {
    constructor(name) {
        super();
        this.name = name;
    }
    recive(n) {
        console.log(`${this.name} recive: ${n}`);
    }
}

const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook)); // "App subscribed"
console.log(center.subscribe(instagram)); // "App subscribed"

center.notifyAll("New post added");
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

center.notifyAll("Story updated");
center.notifyAll("Hello Everyone");
// only Facebook should receive the message
