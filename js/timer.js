"use strict";

//evalute the current state of clock and decides what to decrement or stop
const decrementTime = function (e) {
  //decrement minutes if seconds is 00
  let minutes = Number(timerMin.innerText);
  let seconds = Number(timerSec.innerText);
  const currentMode = findCurrentMode();
  if (minutes === 0 && seconds === 0) {
    stopTimer();
    playAlarm(e);
    addMinuteToGraph();
    //remove pressed class from start button
    startBtn.classList.remove("pressed");
    //update work/break sessions completed
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
    updateTitle();
  } else if (seconds === 0) {
    let customModeMin;
    switch (currentMode) {
      case "work":
        customModeMin = customWork.value;
        break;
      case "shortBreak":
        customModeMin = customShortBreak.value;
        break;
      default:
        customModeMin = customLongBreak.value;
    }
    if (minutes <= +customModeMin.value - 1) {
      addMinuteToGraph();
    }
    minutes--;
    timerMin.innerText = padWithZeros(minutes);
    timerSec.innerText = 59;
    updateTitle();
  } else {
    seconds--;
    timerSec.innerText = padWithZeros(seconds);
    updateTitle();
  }
};
