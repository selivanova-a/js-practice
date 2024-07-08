const fruits = [
  {id:1, title: 'Apples', price: 20, img: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI='},
  {id:1, title: 'Oranges', price: 12, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHePIe0HcJfnuXHoct2eH9_qwdKU9cWli4g&s'},
  {id:1, title: 'Bananas', price: 15, img: 'https://lenta.servicecdn.ru/globalassets/1/-/01/12/30/4dc5744e-8d20-5ef3-bac9-9e2d1fd3f6e7.png?preset=fulllossywhite'},
]

const modal = $.modal({
  title: 'Popup Plugin',
  closable: true,
  content: `
  <h4>Lorem ipsum </h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('primary btn clicked')
        modal.close()
      }},
    {text: 'Cancel', type: 'danger', handler() {
        console.log('Cancel btn clicked')
        modal.close()
      }},
  ]
})