let background = document.getElementById("dark-background");
let modal = document.getElementById("modal");

function exitModal() {
  stop();
  background.classList.add("remove");
  modal.classList.add("remove");
  modeMin = calcMin(mode);
  minutes.innerText = padWithZeros(modeMin);
  seconds.innerText = "00";
  sessions.innerText = custom_s.value;
}

function enterModal() {
  stop();
  background.classList.remove("remove");
  modal.classList.remove("remove");
}

function resetTimes() {
  custom_w.value = 25;
  custom_lb.value = 15;
  custom_sb.value = 5;
  custom_s.value = 4;
}