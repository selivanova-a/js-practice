// Создаём объект,класс у которого мы можем последовательно получать доступ до определенной информации

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

//Генераторы
function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++]
  }
}

const iterator = new MyIterator(['this', 'is', 'iterator']);
const gen = generator(['this', 'is', 'iterator'])

/*
for (const val of iterator) {
  console.log('Value', val)
}*/

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)