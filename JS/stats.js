const stats = document.getElementById("stats");
function exitStats() {
  stop();
  toggleStats();
}

function enterStats() {
  stop();
  toggleStats();
}

function toggleStats() {
  background.classList.toggle("remove");
  stats.classList.toggle("remove");
}

function updateGraph(modeStr) {
  //z-index stats modal behind main timer 
  //remove display none which prevents offsetHeight from being read
  let statsModal = document.getElementById("stats");
  statsModal.style.zIndex = -1000;
  statsModal.classList.remove("remove");

  let maxBarHeight = document.getElementById("stats-maxbar").offsetHeight;
  let addPercentage = modeMin/360 * 100;
  let currentPercentage;
  if(modeStr == "work") {
    let workBarHeight = document.getElementById("stats-work-bar").offsetHeight;
    currentPercentage = workBarHeight/maxBarHeight * 100;
    console.log(workBarHeight);
    console.log(addPercentage);
    if(currentPercentage > maxBarHeight) {
      document.getElementById("stats-work-bar").style.height = 0 + "%";  
    }else{
      document.getElementById("stats-work-bar").style.height = (currentPercentage + addPercentage) + "%";
    }
    updateSessions("work");
  }else{
    let breakBarHeight = document.getElementById("stats-break-bar").offsetHeight;
    currentPercentage = breakBarHeight/maxBarHeight * 100;
    if(currentPercentage > maxBarHeight) {
      document.getElementById("stats-break-bar").style.height = 0 + "%";  
    }else{
      document.getElementById("stats-break-bar").style.height = (currentPercentage + addPercentage) + "%";
    }
    updateSessions("break");
  }

  statsModal.style.zIndex = null;
  statsModal.classList.add("remove");
}

function updateSessions(modeStr) {
  let workNum = document.getElementById("sessions-work");
  let breakNum = document.getElementById("sessions-break");

  if(modeStr == "work"){
    workNum.innerText ++;
  }else{
    breakNum.innerText ++;
  }
}