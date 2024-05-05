//Позволяет выстраивать очень плотную и тесную комммуникацию  между различными объектами разного типа,
//При этом он предоставлет централизованную абстракцию, позволяющюю взаимодействовать группе объектов

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const vlad = new User('Vlad');
const lena = new User('Lena');
const ivan = new User('Ivan');


const room = new ChatRoom();

room.register(vlad);
room.register(lena);
room.register(ivan);

vlad.send('Hello!', lena);
lena.send('Hi!', vlad);
ivan.send('Vsem privet');