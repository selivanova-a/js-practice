/*let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');*/

class Control {
  constructor(parentNode, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.innerHTML = content;
    parentNode.appendChild(el);
    this.node = el;
  }
}

class Renderer extends Control {
  constructor(parentNode, width, height) {
    super(parentNode, 'canvas');
    this.context = this.node.getContext('2d');
    this.width = width;
    this.height = height;
    this.renderList = [];
    this.node.addEventListener('mousemove', (e) => {
      this.renderList.forEach(item => {
        item.handleHover && item.handleHover(e);
      });
      this.render();
    })
  }

  addElement(element) {
    this.renderList.push(element);
  }

  render() {
    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.renderList.forEach(item => {
      item.render(this.context);
    });
  }
}

class Renderable {
  render(context) {

  }
}

class Rectangle extends Renderable {
  constructor(x, y, color) {
    super();
    this.x = x;
    this.y = y;
    this.color = color;
  }

  render(context) {
    super.render();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 20, 20)
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Button extends Rectangle {
  constructor(x, y) {
    super(x, y, '#007');
    this.isHover = false;
  }

  checkHover(mousePoint) {
    return (Math.hypot(((mousePoint.x - this.x)), (mousePoint.y - this.y)) < 20)
  }

  handleHover(e) {
    let mousePoint = new Point(e.offsetX, e.offsetY);
    if (this.checkHover(mousePoint)) {
      if (this.isHover === false) {
        this.onHover && this.onHover(e);
      }
      this.isHover = true;
    } else {
      if (this.isHover === true) {
        this.onOver && this.onOver(e);
      }
      this.isHover = true;
    }
  }

  render(context) {
    if (this.isHover) {
      this.color = 'rgba(210,165,255,0.55)';
    } else {
      this.color = '#000';
    }
    super.render(context);
  }
}

let rend = new Renderer(document.body, 300, 400);

for (let i = 0; i < 10; i++) {
  let but = new Button(Math.random()* 200, Math.random() * 200);
  but.onHover = () => {
    console.log('hover' + i);
  }
  but.onOver = () => {
    console.log('over' + i);
  }
  rend.addElement(but)
}
rend.render()

/*
class Timer {
  constructor(context, x, y) {
    this.x = x;
    this.y = y;
    this.value = 0;
    this.context = context;
    this.onTimeout = () => {};
    this.isStarted = false;
  }

  start(value, onTimeout) {
    if (typeof onTimeout === 'function') {
      this.onTimeout = onTimeout;
    }
    this.value = value;
    this.isStarted = true;
  }

  stop() {
    this.iStarted = false;
  }

  tick() {
    if (this.isStarted) {
      this.value--;
      if (this.value <= 0) {
        this.value = 0;
        this.isStarted = false;
        this.onTimeout()
      }
    }
    this.render();
  }

  render() {
    let time = new Date(this.value * 1000);
    let context = this.context;
    context.font = '48px bold Arial';
    context.fillStyle = '#000';
    context.fillText(`${time.getUTCHours()}:${time.getUTCMinutes()}: ${time.getUTCSeconds()}`, this.x, this.y);
  }
}

let renderList = [
  new Timer(context,0, 50, 100),
  new Timer(context,0, 150, 50),
  new Timer(context,0, 150, 50),
]

renderList[0].start(15, () => {
  console.log('timeout')
});

setInterval(() => {
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  renderList.forEach(item => {
    item.tick();
  })
}, 1000)*/
