// const selectionButtons = document.querySelectorAll("[data-selection]");
// const computer= document.getElementById('computer-guss');
// const player = document.getElementById('player-guss');

// const SELECTIONS = [
//   {
//     name: "rock",
//     emoji: "✊",
//     beats: "scessior",
//   },
//   {
//     name: "paper",
//     emoji: "✋",
//     beats: "rock",
//   },
//   {
//     name: "scessior",
//     emoji: "✌️",
//     beats: "paper",
//   },
// ];
// selectionButtons.forEach((selectionButton) => {
//   selectionButton.addEventListener("click", (e) => {
//     const selectionName = selectionButton.dataset.selection;
//     const selection = SELECTIONS.find(
//       (selection) => selection.name == selectionName
//     );

//     makeSelection(selection);
//   });
// });

// function isWinner(selection, oppeonnts) {
//   return selection.beats === oppeonnts.name;
// }

// function makeSelection(selection) {
//   const computerguss = computerGuss();

//   const youWinner = isWinner(selection, computerguss);
//   const computerwinner = isWinner(computerguss, selection);

//   console.log(youWinner, computerwinner);
//   addSelectionResult(youWinner);
//   console.log(computerguss, computerwinner);
//   console.log(selection, youWinner);

//   auth();
// }

// function addSelectionResult(selection, winner) {
// playerUpper=0;
// computerUpper=0;

// }

// function computerGuss() {
//   const guss = Math.floor(Math.random() * SELECTIONS.length);
//   return SELECTIONS[guss];
// }
const PLAYERPOINT = document.getElementById("player-guss");
const CPUPOINT = document.getElementById("computer-guss");
const SCESSIOR = document.getElementById("scessior");
const PAPER = document.getElementById("paper");
const ROCK = document.getElementById("rock");
let IS_TEN = true;
let playerPoint = 0;
let cpuPoint = 0;
const selectors = [
  {
    name: "rock",
    emoji: "✌️",
    beat: "scessior",
  },
  {
    name: "scessior",
    emoji: "✋",
    beat: "paper",
  },
  {
    name: "paper",
    emoji: "✊",
    beat: "rock",
  },
];
const selector = document.querySelectorAll("[data-selection]");
const question = document.getElementById("questionMark");

function caller(selector) {

  const cpu = Math.trunc(Math.random() * selectors.length);
  const computer = selectors[cpu].beat;
console.log('cpu',computer);
  const choice = selector.target.id;
  
  selector.target.setAttribute('disabled','');
  console.log("player ", choice);
  if(choice===computer[cpu].beat){
    alert('draw');
    return;
  }

  if (choice && computer === selectors[0].beat) {
    playerPoint++;
    PLAYERPOINT.innerHTML = `${playerPoint}`;
  } else if (choice  && computer === selectors[1].beat) {
    playerPoint++;

    PLAYERPOINT.innerHTML = `${playerPoint}`;
  } else if (choice  && computer === selectors[2].beat) {
    playerPoint++;

    PLAYERPOINT.innerHTML = `${playerPoint}`;
  } else if (
    (choice === selectors[0].name && computer === selectors[0].name) ||
    (choice === selectors[1].name && computer === selectors[1].name) ||
    (choice === selectors[0].name && computer === selectors[0].name)
  ) {
    alert("draw");
  } else {
    cpuPoint++;
  }
  for (let i = 0; i == selectors.length; i++) {
    setTimeout(() => {
      document.getElementById("questionMark").innerText = selectors[i].emoji;
    }, 750);
  }
  setTimeout(() => {
    document.getElementById("questionMark").innerText = selectors[cpu].emoji;
    CPUPOINT.innerText = `${cpuPoint}`;
    
  }, 1000);
setTimeout(() => {
  eventRemove();
  selector.target. removeAttribute('disabled');
}, 2000);
  if (playerPoint == 10) {
    alert(`you won ${playerPoint} and cpu lost ${cpuPoint}`);
    playerPoint = 0;
    cpuPoint = 0;
    PLAYERPOINT.innerHTML = " ";
    CPUPOINT.innerText = " ";
  }
  if (cpuPoint == 10) {
    alert(`you won ${playerPoint} and cpu lost ${cpuPoint}`);
    playerPoint = 0;
    cpuPoint = 0;
    PLAYERPOINT.innerHTML = 0;
    CPUPOINT.innerText = 0;
  }

  console.log(selector.target.id);
  
  if(choice === selectors[0].name){
    SCESSIOR.classList.add("absolute", "hidden")
    PAPER.classList.add("absolute", "hidden")
  }

  if(  choice === selectors[2].name){
    ROCK.classList.add("absolute", "hidden")
    SCESSIOR.classList.add("absolute", "hidden")
  }if(choice === selectors[1].name){
    PAPER.classList.add("absolute", "hidden")
    ROCK.classList.add("absolute", "hidden")
  }
  
}




function eventRemove (){
  PAPER.classList.remove("absolute", "hidden");
  ROCK.classList.remove("absolute", "hidden");
  SCESSIOR.classList.remove("absolute", "hidden");
}