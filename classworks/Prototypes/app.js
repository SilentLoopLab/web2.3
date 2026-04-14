// // function Animal(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }
// // Animal.myName = function(){return "name"}
// // Animal.prototype.eat = function () {
// //     return `${this.name} is eating:`;
// // };
// // Animal.prototype.sleep = function () {
// //     return `${this.name} is sleeping:`;
// // };
// // Animal.prototype.getInfo = function () {
// //     return `name ${this.name}\n age: ${age}`;
// // };

// // function Dog(name, age, breed) {
// //     Animal.call(this, name, age);
// //     this.breed = breed;
// // }
// // Dog.prototype.makeSound = function () {
// //     return "Woof Woof!";
// // };
// // Dog.prototype.getInfo = function () {
// //     return `name: ${this.name}\nage: ${this.age}\nbreed: ${this.breed}`;
// // };
// // Dog.prototype.__proto__ = Animal.prototype;
// // Dog.__proto__ = Animal;
// // let dog = new Dog("Rex", 5, "Doberman");
// // console.log(dog.getInfo());
// // console.log(Dog.myName());

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating:`;
//     };
//     sleep() {
//         return `${this.name} is sleeping:`;
//     };
//     getInfo() {
//         return `name ${this.name}\n age: ${age}`;
//     };
// }

// class Dog {
//     constructor(name, age, breed) {
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     makeSound() {
//         return "Woof Woof!";
//     };
//     getInfo() {
//         return `name: ${this.name}\nage: ${this.age}\nbreed: ${this.breed}`;
//     };
// }
// let dog = new Dog("Rex", 5, "Doberman");
// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Object.setPrototypeOf(Dog, Animal);
// console.log(dog.getInfo());
// console.log(dog.eat());
