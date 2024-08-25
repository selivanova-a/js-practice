// --------------------------

/*async function fetchProducts() {
  console.log('start')

  setTimeout(() => {
    console.log('fetch')
  }, 0)

  async function parseProducts() { // Никак не выпадает из потока
    console.log('parse')
  }

  parseProducts()

  console.log('finish')
}

fetchProducts() //start, parse, finish, fetch*/



//----------------------------2
/*const arr = [1, 6, 3, 4].map((el) => el % 2).filter(Boolean)
console.log(arr) //[1, 1]*/


//---------------------------3

/*let count = 0;

(function fn() {
  if (count === 0) {
    let count = 1;
    console.log(count)
  }
  console.log(count);

  count = 3;
})();

console.log(count) // 1 0 3*/


//---------------------------4

// console.log(1);
//
// const promise1 = new Promise((resolve, reject) => {
//   console.log(2)
// })
//
// promise1.then(res => {
//   console.log(3)
// })
//
// console.log(4) // 1 2 4


//----------------------------5

/*const employer = {
  name: 'Авито',
  address: {
    street: 'Лесная',
    home: 5
  }
}

const employer2 = {...employer};

employer.address.home = 7
employer.name = 'Теремок'

console.log(
  employer2.name,
  employer2.address.home
) // Авито 7 (?????) --------------------------------------------------------*/


//----------------------------6
/*let x = 10;

(function() {
  console.log(x);  // ReferenceError
  let x = 20;
})();*/


//-------------------------------7

/*
const outerFunc = () => {
  let count = 0;
  return() => ++count;
}

const counter = outerFunc()
console.log(counter()) //1
console.log(counter()) //2*/


//----------------------------------8

/*const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name} `)
  }
}

const greet = person.greet;
greet() //Hello, my name is undefined*/

//-----------------------------------9

/*function rearrange([first, second, ...rest], ...extra) {
  return [...extra, second, ...rest, first]
}

const arr = [1, 2, 3, 4, 5];
const result = rearrange(arr, 10, 20)
console.log(result) //[10, 20, 2, 3, 4,  5, 1]*/


//-----------------------------------10

/*function setNewWeather(currentWeather, temperature, isRainy) {
  const newWeather = currentWeather;
  newWeather.isRainy = isRainy;
  newWeather.temperature = temperature;
}

const weather = {temperature: 28}

setNewWeather(weather, 35)

console.log(weather) //{ temperature: 35, isRainy: undefined }*/

//-----------------------------------------------11

/*function setPrice(product, price, isProductChanged) {
  product.price = price;
  isProductChanged = true
}

const isProductChanged = false
const product = {
  name: 'milk',
  amount: 5
}

setPrice(product, 5000, isProductChanged)

console.log(product, isProductChanged) //{ name: 'milk', amount: 5, price: 5000 } false*/

