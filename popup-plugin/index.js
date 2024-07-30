let fruits = [
  {id:1, title: 'Apples', price: 20, img: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI='},
  {id:2, title: 'Oranges', price: 12, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHePIe0HcJfnuXHoct2eH9_qwdKU9cWli4g&s'},
  {id:3, title: 'Bananas', price: 15, img: 'https://lenta.servicecdn.ru/globalassets/1/-/01/12/30/4dc5744e-8d20-5ef3-bac9-9e2d1fd3f6e7.png?preset=fulllossywhite'},
]

const toHTML = fruit => `
            <div class="card" style="width: 18rem;">
                <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
                    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
                </div>
            </div>
`


function render() {
  const html = fruits.map(toHTML).join('')
  document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Закрыть', type: 'primary', handler() {
        priceModal.close()
      }},
  ]
})

/*const confirmModal = $.modal({
  title: 'Вы уверены?',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Отменить', type: 'secondary', handler() {
        confirmModal.close()
      }},
    {text: 'Удалить', type: 'danger', handler() {
        confirmModal.close()
      }},
  ]
})*/

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  let fruit = fruits.find(f => f.id === id)


  if (btnType === 'price') {
    priceModal.setContent(`
    <p>Цена на ${fruit.title}: ${fruit.price}</p>
    `)
    console.log(fruit)
    priceModal.open()
  } else if (btnType === 'remove') {
    $.confirm({
      title: 'Вы уверены?',
      content: `<p>Вы удаляете фрукт: ${fruit.title}</p>`,
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id)
      render()
    }).catch(() => {
      console.log('cancel')
    })
  }
})