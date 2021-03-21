"use strict";

//global variables
let currentMode = "work";
let runTimer; //stores the settimeout function

//helper functions
//find current mode based on the label text at top of app
const findCurrentMode = function () {
  const arrMode = timerMode.innerText.toLowerCase().split(" ");
  arrMode.forEach((substr, index) => {
    if (index !== 0) {
      arrMode[index] = substr.slice(0, 1).toUpperCase() + substr.slice(1);
    }
  }, arrMode);

  return arrMode.join("");
};

const stopTimer = function () {
  clearTimeout(runTimer);
};

const padWithZeros = function (val) {
  //check if val is only 1 digit if
  if (val / 10 < 1) {
    return "0" + val;
  } else {
    return val;
  }
};

const updateModeText = function (mode) {
  switch (mode) {
    case "work":
      timerMode.innerText = "Work";
      break;
    case "shortBreak":
      timerMode.innerText = "Short Break";
      break;
    default:
      timerMode.innerText = "Long Break";
  }
};

const calcTimeElapsed = function () {
  const initialMin = calcTime();
  const minutes = Number(timerSec.innerText),
    seconds = Number(timerSec.innerText);
  const timeElapsed =
    seconds === 0 ? initialMin - minutes : initialMin - minutes - 1;

  //add elapsed time to the correct bar in the chart
  if (currentMode === "work") {
    myChart.data.datasets[0].data[0] += timeElapsed;
  } else {
    myChart.data.datasets[0].data[1] += timeElapsed;
  }
};

//update current mode var, regulate sessions, updating HTML timer with new time
const switchMode = function () {
  const modes = [
    { work: customWork.value },
    { shortBreak: customShortBreak.value },
    { longBreak: customLongBreak.value },
  ];

  let sessionsLeft = Number(timerSessions.innerText);

  //update sessions left
  //decrement sessions after short break, restore max sessions
  //after long break
  if (currentMode === "shortBreak") {
    sessionsLeft--;
    if (sessionsLeft === 0) {
      timerSessions.innerText = "Time for a long break. Great job!";
    } else {
      timerSessions.innerText--;
    }
  } else if (currentMode === "longBreak") {
    timerSessions.innerText = customSessions.value;
    sessionsLeft = Number(customSessions.value);
  }

  //updating current mode global variable
  if (currentMode === "work") {
    currentMode = "shortBreak";
  } else if (sessionsLeft === 0) {
    currentMode = "longBreak";
  } else {
    currentMode = "work";
  }

  updateModeText(currentMode);

  //update html document
  const indexOfNewMode = modes.keys().indexOf(currentMode);
  const newMinutes = modes[indexOfNewMode][currentMode];
  timerMin.innerText = padWithZeros(newMinutes);
  timerSec.innerText = "00";
};

//event listeners
startBtn.addEventListener("click", timer);
