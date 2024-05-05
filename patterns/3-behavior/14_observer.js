//Формирует зависимости один к многим (one to many dependencies)
//Изменения в ожном объекте получают другие объекты
// Example: RxJS

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch(action.type) {
      case 'INCREMENT':
        this.state = ++this.state;
        break;
      case 'DECREMENT':
        this.state = --this.state;
        break;
      case 'ADD':
        this.state += action.payload;
        break;
      default: this.state = this.initialState;
    }
  }
}

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({type: 'INCREMENT'}); //2
stream$.fire({type: 'INCREMENT'}); //3
stream$.fire({type: 'DECREMENT'}); //2
stream$.fire({type: 'ADD', payload: 10}); // 12

console.log(obs1.state); //1
console.log(obs2.state);