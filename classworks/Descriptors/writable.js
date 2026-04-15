"use strict"
const user = {};
Object.defineProperty(user, 'name', {
  value: 'Ivan',
});

user.name = 'Dmitry'; 
console.log(user.name);