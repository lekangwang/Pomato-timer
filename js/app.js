"use strict";

//global variables
let runTimer; //stores the settimeout function

//event listeners
startBtn.addEventListener("click", () => {
  if (runTimer === undefined) {
    runTimer = setInterval(decrementTime, 1);
  }
});
