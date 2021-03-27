"use strict";

//evalute the current state of clock and decides what to decrement or stop
const decrementTime = function (e) {
  updateTitle();
  //decrement minutes if seconds is 00
  let minutes = Number(timerMin.innerText);
  let seconds = Number(timerSec.innerText);
  if (minutes === 0 && seconds === 0) {
    addMinuteToGraph();
    playAlarm(e);
    stopTimer();
    //remove pressed class from start button
    startBtn.classList.remove("pressed");
    //update work/break sessions completed
    const currentMode = findCurrentMode();
    switch (currentMode) {
      case "work":
        statsWork.innerText++;
        break;
      case "shortBreak":
        statsShortBreaks.innerText++;
        break;
      default:
        statsLongBreaks.innerText++;
    }
    switchMode();
  } else if (seconds === 0) {
    if (minutes <= +customWork.value - 1) {
      addMinuteToGraph();
    }
    minutes--;
    timerMin.innerText = padWithZeros(minutes);
    timerSec.innerText = 59;
  } else {
    seconds--;
    timerSec.innerText = padWithZeros(seconds);
  }
};
