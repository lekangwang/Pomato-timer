"use strict";

const playSound = function (e) {
  let btn = e.target;
  let src;
  if (btn.classList.contains("push-btn")) {
    src = "./sound-effects/click.mp3";
  } else if (btn.classList.contains("grey-btn") && btn.id !== "default-btn") {
    src = "./sound-effects/secondary-click.mp3";
  } else {
    src = "./sound-effects/click2.mp3";
  }
  audioElement.src = src;
  audioElement.volume = 0.2;
  audioElement.play();
};

const playAlarm = function () {
  let src = "./sound-effects/alarm.mp3";
  audioElement.src = src;
  audioElement.volume = 0.1;
  audioElement.play();
};
