class Bird {
    fly() {
        console.log("Bird fly");
    }
}

class Sparrow extends Bird {
    fly() {
        console.log("Sparrow fly");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguin can't fly");
    }
}

//__________________________________

class Bird {
    eat() {
        console.log("Bird eat");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flyable bird is flying");
    }
}

class Sparrow extends FlyingBird {
    fly() {
        console.log("Sparrow fly");
    }
}

class Penguin extends Bird {
    swim() {
        console.log("Penguin swimming");
    }
}

function makeFlyingBirdFly(bird) {
    bird.fly();
}

const sparrow = new Sparrow();
makeFlyingBirdFly(sparrow);

const penguin = new Penguin();
penguin.eat();
penguin.swim();
