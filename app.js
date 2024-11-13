const startButton = document.querySelector('#button');
const statusMessage = document.querySelector('.status-message')

// function addStatusMessage(text) {
//   statusMessage.innerHTML = text;
// }

const buttonClicked = () => {
  let randomNumber = Math.random();

  if (randomNumber > 0.5) {
    console.log('Car is started')
    startButton.classList.add('hide');
    function carCrashed() {
      console.log('Car is crashed');
      startButton.classList.remove('hide');
    }
    setTimeout(carCrashed, 5000);
    console.log('We wait crashed')

  } else {
    console.log('Something went wrong')
  }


}

startButton.addEventListener('click', buttonClicked)