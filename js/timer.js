"use strict";

//evalute the current state of clock and decides what to decrement or stop
const decrementTime = function () {
  //decrement minutes if seconds is 00
  let minutes = +timerMin.innerText;
  let seconds = +timerSec.innerText;
  const currentMode = findCurrentMode();
  if (minutes === 0 && seconds === 0) {
    stopTimer();
    playAlarm();
    addMinuteToGraph();
    //remove pressed class from start button
    startBtn.classList.remove("pressed");
    //update work/break sessions completed in stats modal
    if (currentMode === "work") {
      statsWork.innerText++;
    } else if (currentMode === "shortBreak") {
      statsShortBreaks.innerText++;
    } else {
      statsLongBreaks.innerText++;
    }
    switchMode();
    updateTitle();
  } else if (seconds === 0) {
    let customModeMin;
    if (currentMode === "work") {
      customModeMin = customWork.value;
    } else if (currentMode === "shortBreak") {
      customModeMin = customShortBreak.value;
    } else {
      customModeMin = customLongBreak.value;
    }
    if (minutes <= +customModeMin - 1) {
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
