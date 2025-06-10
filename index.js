let homeScoreEl = document.getElementById("homescore-el");
let guestScoreEl = document.getElementById("guestscore-el");
let homeCount = 0;
let guestCount = 0;
function homeAddOne() {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
}
function homeAddTwo() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
}
function homeAddThree() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
}
function guestAddOne() {
  guestCount += 1;
  guestScoreEl.textContent = guestCount;
}
function guestAddTwo() {
  guestCount += 2;
  guestScoreEl.textContent = guestCount;
}
function guestAddThree() {
  guestCount += 3;
  guestScoreEl.textContent = guestCount;
}
