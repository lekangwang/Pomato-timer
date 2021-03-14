const background = document.getElementById("dark-background");
const modal = document.getElementById("modal");

function exitModal() {
  stop();
  toggleModal();
  modeMin = calcMin(mode);
  minutes.innerText = padWithZeros(modeMin);
  seconds.innerText = "00";
  sessions.innerText = custom_s.value;
}

function toggleModal() {
  background.classList.toggle("remove");
  modal.classList.toggle("remove");
}

function enterModal() {
  stop();
  toggleModal();
}

function resetTimes() {
  custom_w.value = 25;
  custom_lb.value = 15;
  custom_sb.value = 5;
  custom_s.value = 4;
}