"use strict";

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

const determineMinutes = function (currentMode) {
  if (currentMode === "work") {
    return +customWork.value;
  } else if (currentMode === "shortBreak") {
    return +customShortBreak.value;
  } else {
    return +customLongBreak.value;
  }
};

const stopTimer = function () {
  clearInterval(runTimer);
  runTimer = undefined;
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
  if (mode === "work") {
    timerMode.innerText = "Work";
  } else if (mode === "shortBreak") {
    timerMode.innerText = "Short Break";
  } else {
    timerMode.innerText = "Long Break";
  }
};

const styleTimer = function (bgColor, textColor, opacity) {
  appBackground.style = `background-color: var(${bgColor});`;
  timerMode.style = `color: ${textColor};`;
  timerMin.style = `color: ${textColor};`;
  timerSec.style = `color: ${textColor};`;
  timerColon.style = `color: ${textColor};`;
  timerSessions.style = `color: ${textColor};`;
  timerSessionsHeader.style = `opacity: ${opacity};`;
};

//update current mode var, regulate sessions, updating HTML timer with new time
const switchMode = function () {
  const modes = [
    { work: customWork.value },
    { shortBreak: customShortBreak.value },
    { longBreak: customLongBreak.value },
  ];

  let sessionsLeft = +timerSessions.innerText;
  let currentMode = findCurrentMode();

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
    sessionsLeft = +customSessions.value;
  }

  //updating current mode global variable with styling
  if (currentMode === "work") {
    currentMode = "shortBreak";
    styleTimer("--tertiary", "black", 1);
  } else if (sessionsLeft === 0) {
    currentMode = "longBreak";
    styleTimer("--dark", "white", 0);
  } else {
    currentMode = "work";
    styleTimer("--background", "black", 1);
  }

  //reset html timer element to the new time
  updateModeText(currentMode);
  let indexOfNewMode;
  for (let [index, mode] of modes.entries()) {
    if (mode.hasOwnProperty(currentMode)) {
      indexOfNewMode = index;
    }
  }
  const newMinutes = modes[indexOfNewMode][currentMode];
  timerMin.innerText = padWithZeros(newMinutes);
  timerSec.innerText = "00";
  updateTitle();
};

//toggle the styling for both start and stop buttons
const toggleStartStop = function (element) {
  if (element === startBtn) {
    startBtn.classList.add("pressed");
    stopBtn.classList.remove("pressed");
  } else {
    startBtn.classList.remove("pressed");
    stopBtn.classList.add("pressed");
  }
};

//hide or show target modal
const toggleModal = function (modal, event) {
  modal.classList.toggle("hide");
  modal.classList.toggle("active");
  modalBackground.classList.toggle("hide");
};

//update browswer tab title
const updateTitle = function () {
  const currentMode = findCurrentMode();
  let currentTitle = `${timerMin.innerText} : ${timerSec.innerText}`;
  if (currentMode === "work") {
    currentTitle += " - Time to work!";
  } else if (currentMode === "shortBreak") {
    currentTitle += " - Phew, take a breather...";
  } else {
    currentTitle += " - Break time!";
  }
  document.title = currentTitle;
};
