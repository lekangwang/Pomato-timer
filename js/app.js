"use strict";

//global variables
let runTimer; //stores the settimeout function

//event listeners
appControlsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("push-btn")) return;
  if (e.target.dataset.btn === "start") {
    toggleStartStop(startBtn);
    if (!runTimer) {
      runTimer = setInterval(() => decrementTime(e), 1000);
    }
  } else if (e.target.dataset.btn === "stop") {
    stopTimer();
    toggleStartStop(stopBtn);
  } else {
    stopTimer();
    const minutes = determineMinutes(findCurrentMode());
    startBtn.classList.remove("pressed");
    stopBtn.classList.remove("pressed");
    timerMin.innerText = padWithZeros(minutes);
    timerSec.innerText = "00";
    updateTitle();
  }
  playSound(e);
});

modalControlsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("grey-btn")) return;
  stopTimer();
  toggleStartStop(stopBtn);
  if (e.target.id === "customize-btn") {
    toggleModal(customizeModal);
  } else if (e.target.id === "stats-btn") {
    toggleModal(statsModal);
  } else {
    toggleModal(helpModal);
  }
  playSound(e);
});

const backBtnHandler = function (modal, e) {
  toggleModal(modal);
  playSound(e);
};

customBackBtn.addEventListener("click", function (e) {
  const currentMode = findCurrentMode();
  if (currentMode === "work") {
    timerMin.innerText = padWithZeros(customWork.value);
  } else if (currentMode === "shortBreak") {
    timerMin.innerText = padWithZeros(customWork.value);
  } else {
    timerMin.innerText = padWithZeros(customLongBreak.value);
  }
  timerSec.innerText = "00";
  timerSessions.innerText = customSessions.value;
  updateTitle();
  backBtnHandler(customizeModal, e);
});
statsBackBtn.addEventListener("click", function (e) {
  backBtnHandler(statsModal, e);
});
helpBackBtn.addEventListener("click", function (e) {
  backBtnHandler(helpModal, e);
});

//Customize modal
customizeDefaultBtn.addEventListener("click", function (e) {
  playSound(e);
  customWork.value = "25";
  customShortBreak.value = "5";
  customLongBreak.value = "15";
  customSessions.value = "4";
});

modalBackground.addEventListener("click", function () {
  if (customizeModal.classList.contains("active")) {
    toggleModal(customizeModal);
  } else if (statsModal.classList.contains("active")) {
    toggleModal(statsModal);
  } else {
    toggleModal(helpModal);
  }
});

window.onbeforeunload = function () {
  return "Are you sure you want to leave?";
};
