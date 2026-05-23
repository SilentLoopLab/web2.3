class Person {
   constructor(name) {
      this.name = name;
   }
   introduce() {
      return `My name is ${this.name}.`;
   }
}

class Student extends Person {
   constructor(name, grade) {
      super(name);
      this.grade = grade;
   }
   introduce() {
      return `${super.introduce()} I study in grade ${this.grade}.`;
   }
}
class ExcellentStudent extends Student {
   constructor(name, grade, score) {
      this.score = score;
   }
   introduce() {
      return `${super.introduce()} My score is ${this.score}.`;
   }
}

const p = new Person("Alex");
const s = new Student("Anna", 10);
const e = new ExcellentStudent("Tom", 12, 95);

console.log(p.introduce());
console.log(s.introduce());
console.log(e.introduce());
