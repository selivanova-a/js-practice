const fruits = [
  {id:1, title: 'Apples', price: 20, img: ''},
  {id:1, title: 'Oranges', price: 12, img: ''},
  {id:1, title: 'Bananas', price: 15, img: ''},
]

const modal = $.modal({
  title: 'Popup Plugin',
  closable: true,
  content: `
  <h4>Lorem ipsum </h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
  `,
  width: '400px'
})