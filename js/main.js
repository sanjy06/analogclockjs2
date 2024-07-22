const hour = document.querySelector(".hrs");
const minutes = document.querySelector(".mins");
const second = document.querySelector(".sec");

setInterval(runClock, 1000);
function runClock() {
  const time = new Date();
  const sec = time.getSeconds() / 60;
  const mins = (sec + time.getMinutes()) / 60;
  const hrs = (mins + time.getHours()) / 12;

  hour.style.setProperty("--rotation", hrs * 360);
  minutes.style.setProperty("--rotation", mins * 360);
  second.style.setProperty("--rotation", sec * 360);
}

runClock();
