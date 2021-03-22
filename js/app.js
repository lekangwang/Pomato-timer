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
});

stopBtn.addEventListener("click", () => {
  toggleStartStop(stopBtn);
  stopTimer();
});
