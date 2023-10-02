const betu = document.querySelectorAll(".betu");
const start = document.querySelector(".start");
const betuk = {
  elso: ["K", "T", "L", "É", "P", "E"],
  masodik: ["T", "N", "G", "Z", "E", "O"],
  harmadik: ["Y", "M", "A", "H", "I", "S"],
  negyedik: ["R", "É", "B", "Z", "I", "L"],
  otodik: ["F", "M", "E", "Y", "Ö", "A"],
  hatodik: ["O", "N", "K", "C", "T", "A"],
  hetedik: ["D", "Á", "Ü", "S", "E", "M"],
  nyolcadik: ["V", "J", "L", "A", "O", "S"],
  kilencedik: ["K", "G", "N", "U", "I", "Á"],
  tizedik: ["E", "L", "A", "R", "N", "T"],
};
function randomNumber() {
  const randInt = Math.floor(Math.random() * 6);

  return randInt;
}

let seconds = 60;
start.addEventListener("click", function () {
  betu[0].textContent = betuk.elso[randomNumber()];
  betu[1].textContent = betuk.masodik[randomNumber()];
  betu[2].textContent = betuk.harmadik[randomNumber()];
  betu[3].textContent = betuk.negyedik[randomNumber()];
  betu[4].textContent = betuk.otodik[randomNumber()];
  betu[5].textContent = betuk.hatodik[randomNumber()];
  betu[6].textContent = betuk.hetedik[randomNumber()];
  betu[7].textContent = betuk.nyolcadik[randomNumber()];
  betu[8].textContent = betuk.kilencedik[randomNumber()];
  betu[9].textContent = betuk.tizedik[randomNumber()];

  if (seconds === 60) {
    makeIteration();
  } else {
    seconds = 60;
  }
  //rotate();
});
function rotate() {
  betu.forEach((b) => b.classList.add("rotate"));
}

const makeIteration = () => {
  if (seconds > 0) {
    document.querySelector("h2").textContent = seconds;
    seconds -= 1;
    setTimeout(makeIteration, 1000);
  } else {
    document.querySelector("h2").textContent = "Lejárt az idő";
    new Audio("alarm.mp3").play();
  }
};
