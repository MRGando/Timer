const audio = new Audio("Ringtone-3.mp3");
const time = document.querySelector(".clock");
const buttons = document.querySelectorAll(".button");
const stopAlarmButton = document.querySelector(".stopAlarm");
let min = 0;
let sec = 0;
askTheTime();
let timer = setInterval(() => {
  sec -= 1;
  if (sec == -1) {
    min -= 1;
    sec = 60;
  }
  if (min === 0 && sec === 0) {
    clear();
  }
  if (min < 10 && sec >= 10) {
    time.innerHTML = `0${min} : ${sec}`;
  } else if (sec < 10 && min >= 10) {
    time.innerHTML = `${min} : 0${sec}`;
  } else if (min < 10 && sec < 10) {
    time.innerHTML = `0${min} : 0${sec}`;
  } else {
    time.innerHTML = `${min} : ${sec}`;
  }
}, 1000);

function clear() {
  clearInterval(timer);
  time.classList.add("animate");
  audio.play();
  audio.addEventListener("ended", () => {
    audio.play();
  });
  buttons.forEach((button) => {
    button.style.opacity = 1;
  });
}

function askTheTime() {
  const userTime = prompt("Set the time:", "e.g : 2:12");
  if (userTime != "") {
    const putTimes = userTime.split(":");
    min = userTime[0];
    sec = userTime[2] + userTime[3];
  } else {
    alert("invalid value.");
  }
}
stopAlarmButton.addEventListener("click", () => {
  time.classList.remove("animate");
  audio.pause();
});
