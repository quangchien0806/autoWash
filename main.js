// menuJS
var menuList = document.getElementById("menuList");
var iconMenu = document.getElementById("icon_menu");
iconMenu.onclick = function () {
  menuList.classList.toggle("dropdown");
};
// Count Up JS
// const number = document.getElementById("counter-up");
// const scrollAll = document.getElementById("scroll");

// scroll.onscroll = function (){

// }
const numberPoints = document.getElementById("points");
const numberWorkers = document.getElementById("workers");
const numberClients = document.getElementById("happy-clients");
const numberCompleted = document.getElementById("completed");
function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, 17);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber(25, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    numberPoints.innerText = formattedNumber;
  });

  animateNumber(350, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    numberWorkers.innerText = formattedNumber;
  });

  animateNumber(1500, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    numberClients.innerText = formattedNumber;
  });
  animateNumber(5000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    numberCompleted.innerText = formattedNumber;
  });
});
