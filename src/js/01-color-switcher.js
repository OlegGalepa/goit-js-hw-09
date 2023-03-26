const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onClickStartChangeColor);
stopBtn.addEventListener('click', onClickStopChangeColor);

function onClickStartChangeColor() {    
  startBtn.setAttribute('disabled', '');

    timerId = setInterval(() => {
     body.style.backgroundColor = getRandomHexColor()}, 1000);
}

function onClickStopChangeColor() {
  startBtn.removeAttribute('disabled');

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
