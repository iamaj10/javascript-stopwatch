//getting buttons
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

//initialising variables
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let counter = true;
let start = true;

//start button clicked
startButton.addEventListener("click", () => {
  counter = true;
  if (start) {
    stopWatch();
    start = false;
  }
});

//stop button clicked
stopButton.addEventListener("click", () => {
  counter = false;
  start = true;
});

//reset button clicked
resetButton.addEventListener("click", () => {
  start = true;
  counter = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
});

//stopwatch
function stopWatch() {
  if (counter) {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    if (hour < 10) {
      hrString = "0" + hrString;
    }
    if (minute < 10) {
      minString = "0" + minString;
    }
    if (second < 10) {
      secString = "0" + secString;
    }
    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("minute").innerHTML = minString;
    document.getElementById("second").innerHTML = secString;

    setTimeout(stopWatch, 1000);
  }
}
