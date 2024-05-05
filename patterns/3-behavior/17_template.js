//Скелет будущего алгоритма, который делегирует создание конкретного функционала в дочерние классы

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} имеет ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'процесс создания программ';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'процесс тестирования';
  }
}

const dev = new Developer('Vlad', 100000);
console.log(dev.getPaid());
console.log(dev.work());