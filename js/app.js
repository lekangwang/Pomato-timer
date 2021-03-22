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

  //track time elapsed and add to appropriate bar
  calcTimeElapsed();

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
});

customizeDefaultBtn.addEventListener("click", () => {
  customWork.value = "25";
  customShortBreak.value = "5";
  customLongBreak.value = "15";
  customSessions.value = "4";
});

customBackBtn.addEventListener("click", () => {
  toggleModal(customizeModal);

  //track minutes elapsed when modal opened
  calcTimeElapsed();

  //reset the current timer to new time
  const currentMode = findCurrentMode();
  switch (currentMode) {
    case "work":
      timerMin.innerText = customWork.value;
      break;
    case "shortBreak":
      timerMin.innerText = customShortBreak.value;
      break;
    default:
      timerMin.innerText = customLongBreak.value;
  }

  timerSec.innerText = "00";
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
