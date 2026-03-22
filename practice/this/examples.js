"use strict";
// //--------1-------

// console.log(this);

// //--------2-------

// function foo() {
//     console.log(this);
// }
// foo();

// //--------3-------

// var a = 10;
// function foo() {
//     console.log(this.a);
// }
// foo();

// //--------4-------

// const user = {
//   name: "Joe",
//   showName() {
//     console.log(this.name);
//   }
// };

// user.showName();

// //--------5-------

// const car = {
//   brand: "BMW",
//   model: "M5",
//   info() {
//     console.log(this.brand + " " + this.model);
//   }
// };

// car.info();

// //--------6-------

// const person = {
//   name: "Fernando",
//   sayHi() {
//     console.log("Hi, " + this.name);
//   }
// };

// const fn = person.sayHi;
// fn();

// //--------7-------

// const person = {
//   name: "Arbeloa",
//   sayHi() {
//     console.log("Hi, " + this.name);
//   }
// };

// const fn = person.sayHi.bind(person);
// fn();

// //--------8-------

// function User(name) {
//   this.name = name;
// }

// const u1 = new User("Thiago");
// console.log(u1);

// //--------9-------

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   showType() {
//     console.log(this.type);
//   }
// }

// const cat = new Animal("Cat");
// cat.showType();
// //--------10-------

// const obj = {
//   name: "Ada",
//   regular: function() {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// obj.regular();
// obj.arrow();
// //--------11-------

// const user = {
//   name: "Joe",
//   show() {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };
// user.show();

// //-------12--------

// function greet(city, country) {
//   console.log(`I am ${this.name} from ${city}, ${country}`);
// }

// const person = { name: "Armen" };

// greet.call(person, "Yerevan", "Armenia");
// greet.apply(person, ["Yerevan", "Armenia"]);
