//Позвоялет последовательно у одного и того же объекта вызывать какой-то набор операций
// (последовательно их модифицировать)

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).add(9))

const sum2 = new MySum(0);
console.log(sum2.add(8).add(90).add(9))


