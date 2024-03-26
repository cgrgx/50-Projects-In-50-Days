const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

//  a function that increases the load
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//  a function that maps a number from one range to another range.
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
