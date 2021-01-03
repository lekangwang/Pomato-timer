const defaultBtn = document.getElementById("default");
const backBtn = document.getElementById("back");
const customBtn = document.getElementById("custom-btn");
const statsBackBtn = document.getElementById("stats-back");
const statsBtn = document.getElementById("stats-btn");

startBtn.addEventListener('click', play);
resetBtn.addEventListener('click', play);
stopBtn.addEventListener('click', play);
defaultBtn.addEventListener('click', play);
backBtn.addEventListener('click', play);
customBtn.addEventListener('click', play);
statsBackBtn.addEventListener('click', play);
statsBtn.addEventListener('click', play);

function play(ev) {
  let clickable = ev.currentTarget;
  ev.preventDefault();

  let fn = clickable.getAttribute('data-file');
  let src = '/Sounds/' + fn + ".mp3";

  let audio = document.getElementById('audio-player');
  audio.src = src;
  audio.play();
}

function alarm() {
  let src = '/Sounds/alarm.mp3';
  let audio = document.getElementById('audio-player');
  audio.src = src;
  audio.play();
}