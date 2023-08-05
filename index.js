const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let interval = null

  return (seconds) => {

    let mainSeconds = seconds
    clearInterval(interval)

    //function timer
    function timer() {
      const hours = Math.floor(mainSeconds / 60 / 60) % 24
      const minuts = Math.floor(mainSeconds / 60) % 60
      const second = Math.floor(mainSeconds) % 60

      timerEl.textContent = `${Math.floor(mainSeconds / 60 / 60) % 24 <= 9 ? `0${hours}` : `${hours}`}:
      ${Math.floor(mainSeconds / 60) % 60 <= 9 ? `0${minuts}` : `${minuts}`}:
      ${Math.floor(mainSeconds) % 60 <= 9 ? `0${second}` : `${second}`}`

      mainSeconds = mainSeconds > 0 ? mainSeconds - 1 : 0;
    };

    //setInterval
    interval = setInterval(timer, 1000);

  };
};

const animateTimer = createTimerAnimator();

//input принимает только цифры
inputEl.addEventListener('input', (e) => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
