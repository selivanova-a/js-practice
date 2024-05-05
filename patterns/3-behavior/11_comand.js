//Позвоялет создавать определённую абстрактную оболочку над функционалом, который позвоялет управлять
// через другой объект

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandExecuted = [];
  }

  execute(command) {
    this.commandExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute('square')); //4
console.log(x.execute('cube')); //8

console.log(x.commandExecuted) //[ 'square', 'cube' ]


