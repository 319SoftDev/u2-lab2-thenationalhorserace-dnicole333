console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");

const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");

const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};
const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};
const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
};



// Check for a winner
const checkWinner = (position, color) => {


  if (blue_position==5){
    winner.innerHTML=("Blue is Winner!");

  };
  if (pink_position==5){
    winner.innerHTML=("Pink is Winner!");

  };
  if (brown_position==5){
    winner.innerHTML=("Brown is Winner!");

  };
};

const resetButton = document.querySelector("#reset-button");

const resetRace = () => {
  blue_position = 1;
  pink_position =1;
  brown_position =1;

  changePosition(blueHorse, blue_position);
  changePosition(pinkHorse, pink_position);
  changePosition(brownHorse, brown_position);
  
  winner.innerHTML ='';

  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
};

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink );
brownButton.addEventListener("click", advanceBrown);
resetButton.addEventListener("click", resetRace);
