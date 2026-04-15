const person = {
  first: 'John',
  last: 'Doe'
};

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.first} ${this.last}`;
  },
  set(newValue) {
    [this.first, this.last] = newValue.split(' ');
  },
  enumerable: true,
  configurable: true
});

// console.log(person.fullName); 
person.fullName = 'Jane Smith';
for (const key in person) {
  console.log(key);
}
