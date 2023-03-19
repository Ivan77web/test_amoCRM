const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (sec) => {
  if (sec > 0) {
    sec--;
    timerEl.innerHTML = getCorrectTime(sec);
    buttonEl.setAttribute('disabled', true);

    const timer = setInterval(() => {
      if (sec > 1) {
        sec--;
        timerEl.innerHTML = getCorrectTime(sec);
      } else {
        clearInterval(timer);
        timerEl.innerHTML = "hh:mm:ss";
        buttonEl.removeAttribute('disabled');
      }
    }, 1000)
  };
};

const changeHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, '');
}

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  createTimerAnimator(seconds);
  inputEl.value = '';
});

const getCorrectTime = (sec) => {
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec - h * 3600) / 60);
  let s = sec - h * 3600 - m * 60;

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  return `${h}:${m}:${s}`;
}