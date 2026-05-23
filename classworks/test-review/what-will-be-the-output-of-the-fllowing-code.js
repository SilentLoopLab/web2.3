function User() {}
User.prototype.getName = function() {
  return this.name;
};

const u1 = new User();
const u2 = new User();
u1.name = "Anna";
u2.name = "Bob";
console.log(u1.getName());
console.log(u1.__proto__ === User.prototype);
console.log(u1.__proto__ === u2.__proto__);

User.prototype.setName = function(name) {
  this.name = name;
};
console.log(u2.setName("Charlie"));

User.prototype = {
  greet: function() {
    return `Hello ${this.name}`;
  }
};

const u3 = new User();
u3.name = "David";
console.log(u1.greet);
console.log(u3.greet());
console.log(u3.getName());
