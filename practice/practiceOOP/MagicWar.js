class CharacterFactory {
    createCharacter(type, name) {
        switch (type.toLowerCase()) {
            case "warrior":
                return new Warrior(name);
            case "mage":
                return new Mage(name);
            case "archer":
                return new Archer(name);
            default:
                return "Foo foo foo gna eli mtaci"
        }
    }
}

class Character {
    constructor(name) {
        if (new.target === Character) {
            throw new Error("It's a abstract class");
        }
        this.name = name;
    }
    getInfo() {
        return `${this.type}: ${this.name}, HP: ${this.health}`;
    }
    attack() {
        throw new Error("Method must be Allowed");
    }
}
class Warrior extends Character {
    constructor(name) {
        super(name);
        this.health = 150;
        this.type = "Warior";
    }
    attack() {
        return `${this.name} attacks with a sword`;
    }
}

class Mage extends Character {
    constructor(name) {
        super(name);
        this.health = 100;
        this.type = "Warior";
    }
    attack() {
        return `${this.name} casts a spell`;
    }
}

class Archer extends Character {
    constructor(name) {
        super(name);
        this.health = 120;
        this.type = "Warior";
    }
    attack() {
        return `${this.name} shoots an arrow`;
    }
}
const factory = new CharacterFactory();

const warrior = factory.createCharacter("warrior", "Thor");
const mage = factory.createCharacter("mage", "Merlin");
const archer = factory.createCharacter("archer", "Legolas");

console.log(warrior.getInfo()); // "Warrior: Thor, HP: 150"
console.log(mage.getInfo()); // "Mage: Merlin, HP: 100"
console.log(archer.getInfo()); // "Archer: Legolas, HP: 120"

console.log(warrior.attack()); // "Thor attacks with a sword"
console.log(mage.attack()); // "Merlin casts a spell"
console.log(archer.attack()); // "Legolas shoots an arrow"
