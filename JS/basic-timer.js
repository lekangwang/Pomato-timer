//Title
let mode = document.getElementById("type").innerText;
let modeDiv = document.getElementById("type");

//Clock variables
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

//Control buttons
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");

//Sessions header text
let sessionsText = document.getElementById("sessions-header");
let sessions = document.getElementById("sessions");

let custom_w = document.getElementById("custom-w");
let custom_sb = document.getElementById("custom-sb");
let custom_lb = document.getElementById("custom-lb");
let custom_s = document.getElementById("custom-s");

let runTimerFunc, startActive = false, stopActive = false;

//Calculate work or break minutes
function calcMin(mode) {
  if(mode == "Work"){
    return custom_w.value;
  }else if (mode == "Long Break"){
    return custom_lb.value;
  }else{
    return custom_sb.value;
  }
}
let modeMin = calcMin(mode);

function start (){
  stopBtn.classList.remove("pressed");
  startBtn.classList.add("pressed");

  stopActive = false; 
  if(startActive == false) {
    runTimerFunc = setInterval(timer, 1000);
    startActive = true;
  }
};

function stop (){
  stopBtn.classList.add("pressed");
  startBtn.classList.remove("pressed");

  if (stopActive === false) {
    stopTimer();
    startActive = false;
    stopActive = true;
  }
};

function reset (){
  //add raise button style class to start and stop button
  stopTimer();
  stopBtn.classList.remove("pressed");
  startBtn.classList.remove("pressed");

  minutes.innerText = modeMin;
  seconds.innerText = "00";

  startActive = false;
  stopActive = false;
};

function padWithZeros(val) {
  //check if val is only 1 digit if
  if (val / 10 < 1) {
    return "0" + val;
  }else {
    return val;
  }
}

function timer() {
  //check if the seconds is 0 and minutes is 0
  if(minutes.innerText == 0 && seconds.innerText == 0){
    //check sessions if 0 
    if(sessions.innerText < 1){
      //check which mode you're in 
      if(mode === "Long Break") {
        sessions.innerText = custom_s.value;
        sessions.classList.remove("remove");
        sessionsText.innerText = "Sessions until break:";
        modeDiv.innerText = "Work";
        mode = "Work";
      } else {
        sessions.innerText = 0;
        sessions.classList.add("remove");
        sessionsText.innerText = "Long breaktime!";
        modeDiv.innerText = "Long Break";
        mode = "Long Break";
      }
      stopTimer();
      stopBtn.classList.remove("pressed");
      startBtn.classList.remove("pressed");
    
      modeMin = calcMin(mode);
      minutes.innerText = padWithZeros(modeMin);
      seconds.innerText = "00";
    
      startActive = false;
      stopActive = false;
    } else {
      //check which mode you're in 
      if(mode === "Work") {
        sessions.classList.add("remove");
        sessions.innerText --;
        sessionsText.innerText = "Breaktime!";
        modeDiv.innerText = "Break";
        mode = "Break";
      } else {
        sessions.classList.remove("remove");
        sessionsText.innerText = "Sessions until break:";
        modeDiv.innerText = "Work";
        mode = "Work";
      }

      // calculate appropriate minutes
      modeMin = calcMin(mode);

      stopTimer();
      stopBtn.classList.remove("pressed");
      startBtn.classList.remove("pressed");
      
      minutes.innerText = padWithZeros(modeMin);
      seconds.innerText = "00";
    
      startActive = false;
      stopActive = false;
    }
    alarm();
  } else if (seconds.innerText == 0) {
    //decrement minutes, set seconds to 59;
    minutes.innerText--;
    if(minutes.innerText < 10) {
      minutes.innerText = padWithZeros(minutes.innerText);
    }
    seconds.innerText = 59;
  } else {
    seconds.innerText--; 
    if(seconds.innerText < 10) {
      seconds.innerText = padWithZeros(seconds.innerText);
    }
  }
  updateTitle();
}

function stopTimer() {
  clearInterval(runTimerFunc);
}

