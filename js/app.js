"use strict";

//global variables
let runTimer; //stores the settimeout function

//event listeners
startBtn.addEventListener("click", () => {
  toggleStartStop(startBtn);
  if (runTimer === undefined) {
    runTimer = setInterval(decrementTime, 1);
  }
});

resetBtn.addEventListener("click", () => {
  startBtn.classList.remove("pressed");
  stopBtn.classList.remove("pressed");
  stopTimer();

  const currentMode = findCurrentMode();
  let minutes;
  switch (currentMode) {
    case "work":
      minutes = +customWork.value;
      break;
    case "shortBreak":
      minutes = +customShortBreak.value;
      break;
    default:
      minutes = +customLongBreak.value;
  }

  timerMin.innerText = padWithZeros(minutes);
  timerSec.innerText = "00";
  updateTitle();
});

stopBtn.addEventListener("click", () => {
  toggleStartStop(stopBtn);
  stopTimer();
});

//Customize modal
customizeBtn.addEventListener("click", () => {
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(customizeModal);
  customUpdateBtn.innerHTML = `Update ${timerMode.innerText} timer now`;
});

customizeDefaultBtn.addEventListener("click", () => {
  customWork.value = "25";
  customShortBreak.value = "5";
  customLongBreak.value = "15";
  customSessions.value = "4";
});

customBackBtn.addEventListener("click", () => {
  toggleModal(customizeModal);
});

customUpdateBtn.addEventListener("click", () => {
  const currentMode = findCurrentMode();
  switch (currentMode) {
    case "work":
      timerMin.innerText = padWithZeros(customWork.value);
      break;
    case "shortBreak":
      timerMin.innerText = padWithZeros(customShortBreak.value);
      break;
    default:
      timerMin.innerText = padWithZeros(customLongBreak.value);
  }
  timerSec.innerText = "00";
  updateTitle();
});

//Stats modal
statsBtn.addEventListener("click", () => {
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(statsModal);
});

statsBackBtn.addEventListener("click", () => {
  toggleModal(statsModal);
});

//More info modal
helpBtn.addEventListener("click", () => {
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(helpModal);
});

helpBackBtn.addEventListener("click", () => {
  toggleModal(helpModal);
});
