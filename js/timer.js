"use strict";

//evalute the current state of clock and decides what to decrement or stop
const decrementTime = function () {
  //decrement minutes if seconds is 00
  let minutes = Number(timerMin.innerText);
  let seconds = Number(timerSec.innerText);
  if (minutes === 0 && seconds === 0) {
    stopTimer();
    calcTimeElapsed(); // Chart update doesn't work
    switchMode();
  } else if (seconds === 0) {
    minutes--;
    timerMin.innerText = padWithZeros(minutes);
    timerSec.innerText = 59;
  } else {
    seconds--;
    timerSec.innerText = padWithZeros(seconds);
  }
};
