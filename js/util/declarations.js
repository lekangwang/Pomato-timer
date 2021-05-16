"use strict";

//containers
const mainApp = document.querySelector("#app-container");
const helpModal = document.querySelector("#help-container");
const customizeModal = document.querySelector("#customize-container");
const statsModal = document.querySelector("#stats-container");
const modalBackground = document.querySelector("#modals-background");
const appBackground = document.querySelector("#app-background");

//main timer
const timerMode = document.querySelector("#mode-mode");
const timerColon = document.querySelector("#app-timer-colon");
const timerMin = document.querySelector("#app-timer-minutes");
const timerSec = document.querySelector("#app-timer-seconds");
const timerSessions = document.querySelector("#app-sessions-counter");
const timerSessionsHeader = document.querySelector("#session-counter-header");

//control buttons
const appControlsContainer = document.querySelector(".app-controls");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const stopBtn = document.querySelector("#stop-btn");

//modal activation buttons
const modalControlsContainer = document.querySelector(".app-customize");
const helpBtn = document.querySelector("#help-btn");
const customizeBtn = document.querySelector("#customize-btn");
const statsBtn = document.querySelector("#stats-btn");

//help modal
const helpBackBtn = document.querySelector("#help-back-btn");

//customize modal
const customizeDefaultBtn = document.querySelector("#default-btn");
const customWork = document.querySelector("#custom-w");
const customShortBreak = document.querySelector("#custom-sb");
const customLongBreak = document.querySelector("#custom-lb");
const customSessions = document.querySelector("#custom-s");
const customBackBtn = document.querySelector("#customize-back-btn");
const customUpdateBtn = document.querySelector("#update-btn");

//stats modal
const statsWork = document.querySelector("#w-sessions-counter");
const statsShortBreaks = document.querySelector("#sb-sessions-counter");
const statsLongBreaks = document.querySelector("#lb-sessions-counter");
const statsBackBtn = document.querySelector("#stats-back-btn");

//audio
const audioElement = document.querySelector("#audio-element");
