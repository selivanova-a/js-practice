//-------------------------------------------Реализация метода bind------------------------------------------------------

const person = {
  name: 'John',
}

function info(phoneNumber, email) {
  console.log(`Name: ${this.name}, Phone: ${phoneNumber}, Email: ${email}`);
}

//Demo
// info.bind(person)('12345678', 'v@mail.com');
// info.bind(person,'12345678')('v@mail.com');
// info.bind(person,'12345678', 'v@mail.com');



// 1 Cпособ: простой
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest)
// }



//2 Без встроеннных методов
// function bind(fn, context, ...rest) {
//   return function(...args) {
//     const uniqId = Date.now().toString()
//
//     context[uniqId] = fn;
//
//     const result = context[uniqId](...rest.concat(args));
//
//     delete context[uniqId];
//
//     return result;
//   }
// }



//3 ES5
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return function() {
//     const args = Array.prototype.slice.call(arguments);
//     return fn.apply(context, rest.concat(args))
//   }
// }


//4 ES6
function bind(fn, context, ...rest) {
  return function(...args) {
    //return fn.apply(context, rest.concat(args))
    return fn.call(context, ...rest.concat(args))
  }
}

// bind(info, person)('123456', 'v@gmail.com')
// bind(info, person, '123456')('v@gmail.com')
// bind(info, person, '123456', 'v@gmail.com')()



//Call
function call(fn, context, ...args) {
    const uniqId = Date.now().toString()

    context[uniqId] = fn;

    const result = context[uniqId](...args);

    delete context[uniqId];

    return result;
}

call(info, person, '123456', 'cal@mail.com')



//Apply
function apply(fn, context, args) {
  const uniqId = Date.now().toString()

  context[uniqId] = fn;

  const result = context[uniqId](...args);

  delete context[uniqId];

  return result;
}

apply(info, person, ['123456', 'cal@mail.com']);