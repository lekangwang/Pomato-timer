"use strict";

//global variables
let runTimer; //stores the settimeout function

//event listeners
startBtn.addEventListener("click", (e) => {
  playSound(e);
  toggleStartStop(startBtn);
  if (runTimer === undefined) {
    runTimer = setInterval(() => {
      decrementTime(e);
    }, 1);
  }
});

resetBtn.addEventListener("click", (e) => {
  playSound(e);
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

stopBtn.addEventListener("click", (e) => {
  playSound(e);
  toggleStartStop(stopBtn);
  stopTimer();
});

//Customize modal
customizeBtn.addEventListener("click", (e) => {
  playSound(e);
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(customizeModal);
  customUpdateBtn.innerHTML = `Update ${timerMode.innerText} timer now`;
});

customizeDefaultBtn.addEventListener("click", (e) => {
  playSound(e);
  customWork.value = "25";
  customShortBreak.value = "5";
  customLongBreak.value = "15";
  customSessions.value = "4";
});

customBackBtn.addEventListener("click", (e) => {
  playSound(e);
  toggleModal(customizeModal);
});

customUpdateBtn.addEventListener("click", (e) => {
  playSound(e);
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
statsBtn.addEventListener("click", (e) => {
  playSound(e);
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(statsModal);
});

statsBackBtn.addEventListener("click", (e) => {
  playSound(e);
  toggleModal(statsModal);
});

//More info modal
helpBtn.addEventListener("click", (e) => {
  playSound(e);
  stopTimer();
  toggleStartStop(stopBtn);
  toggleModal(helpModal);
});

helpBackBtn.addEventListener("click", (e) => {
  playSound(e);
  toggleModal(helpModal);
});

window.onbeforeunload = function () {
  return "Dude, are you sure you want to leave? Think of the kittens!";
};
