"use strict";

//containers
const mainApp = document.getElementById("app-container");
const helpModal = document.getElementById("help-container");
const customizeModal = document.getElementById("customize-container");
const statsModal = document.getElementById("stats-container");
const modalBackground = document.getElementById("modals-background");
const appBackground = document.getElementById("app-background");

//main timer
const timerMode = document.getElementById("mode-mode");
const timerMin = document.getElementById("app-timer-minutes");
const timerSec = document.getElementById("app-timer-seconds");
const timerSessions = document.getElementById("app-sessions-counter");
const timerSessionsHeader = document.getElementById("session-counter-header");

//control buttons
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");

//modal activation buttons
const helpBtn = document.getElementById("help-btn");
const customizeBtn = document.getElementById("customize-btn");
const statsBtn = document.getElementById("stats-btn");

//help modal
const helpBackBtn = document.getElementById("help-back-btn");

//customize modal
const customizeDefaultBtn = document.getElementById("default-btn");
const customWork = document.getElementById("custom-w");
const customShortBreak = document.getElementById("custom-sb");
const customLongBreak = document.getElementById("custom-lb");
const customSessions = document.getElementById("custom-s");
const customBackBtn = document.getElementById("customize-back-btn");
const customUpdateBtn = document.getElementById("update-btn");

//stats modal
const statsWork = document.getElementById("w-sessions-counter");
const statsShortBreaks = document.getElementById("sb-sessions-counter");
const statsLongBreaks = document.getElementById("lb-sessions-counter");
const statsBackBtn = document.getElementById("stats-back-btn");

//audio
const audioElement = document.getElementById("audio-element");
