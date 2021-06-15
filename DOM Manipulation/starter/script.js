// Presentation Code Goes here!!

class Person {
  constructor(name) {
    this.name = name;
  }

  // defining method
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let person1 = new Person('John');

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John
