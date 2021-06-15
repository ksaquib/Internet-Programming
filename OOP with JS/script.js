// Presentation Code Goes here!!

class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`I am ${2021 - this.birthYear} old`);
  }
}

class StudentCl extends PersonCl {
  constructor(name, birthYear, course) {
    super(name, birthYear);
    this.course = course;
  }
  introduction() {
    console.log(`I am ${this.name} and I am studying ${this.course}`);
  }
}
const saquib = new StudentCl('Saquib', 1997, 'Computer Science');
