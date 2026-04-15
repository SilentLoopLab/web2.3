const user = {
  name: "Bob"
};

Object.preventExtensions(user);

user.age = 21;

console.log(user.age); 
console.log(user); 
console.log(Object.getOwnPropertyDescriptors(user));