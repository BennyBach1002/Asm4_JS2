// Button to hide rules
const hideRulesBtn=  document.getElementById("toggleRulesBtn");
const rulesToHide = document.getElementsByClassName("rules");

hideRulesBtn.addEventListener("click", () => {
  if (rulesToHide[0].style.display !== "none") {
    rulesToHide[0].style.display = "none";
  } else {
    rulesToHide[0].style.display = "flex";
  }
})

// Get time for the log
const d = new Date();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
const time = document.getElementById("time")
time.innerHTML = ` ${second}s: ${minute}m : ${hour > 12 ? hour - 12 + "pm" : hour + "am" }`

// Game UI
const computerSelect = document.getElementsByClassName("computer_Section");
const playerSelect = document.getElementsByClassName("player_Section");
const rockBtn = document.getElementById("rock_Btn")
const paperBtn = document.getElementById("paper_Btn")
const scissorBtn = document.getElementById("scissor_Btn")
const startGameBtn = document.getElementById("gameStart_Btn")

// Start game
const startGame = () => {
}
startGameBtn.addEventListener("click",startGame)

// All the possible options
const choices = ["rock", "paper", "scissor"];
const ui = {
  rock: `<i id="rock" class="fa-regular fa-hand-back-fist"></i>`,
  paper: `<i id="paper" class="fa-regular fa-hand"></i>`,
  scissor: `<i id="scissor" class="fa-regular fa-hand-scissors"></i>`
}

// Player choices 
const playerPlay = () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
  rockBtn.addEventListener("click", () =>{
    setTimeout(() => {
      playerSelect[0].innerHTML = ui.rock
      return "rock"
    },500)
  })

  paperBtn.addEventListener("click", () =>{
    setTimeout(() => {
      playerSelect[0].innerHTML = ui.paper
      return "paper"
    },500)
  })

  scissorBtn.addEventListener("click", () =>{
    setTimeout(() => {
      playerSelect[0].innerHTML = ui.scissor
      return "scissor"
    },500)
  })
}


// Computer choices are randomly selected from the
const computerPlay = () => {
  const uiValues = Object.values(ui)
  setTimeout(() => {
    computerSelect[0].innerHTML = uiValues[Math.floor(Math.random() * uiValues.length)];
  }, 1000);
};


const playRound = (playerSelection, botSelection) => {
  playerSelection = playerPlay();
  if(playerSelect[0].innerText == "Player"){
    return alert("Please Pick your move")
  } else {
    botSelection = computerPlay();
  }

  // checkResult()
  if (playerSelection === `<i id="rock" class="fa-regular fa-hand-back-fist"></i>`) {
    if (botSelection === `<i id="paper" class="fa-regular fa-hand"></i>`) {
      return "You lose! rock lost to paper!";
    } else {
      return "You won! rock beat scissor!";
    }
  } else if (playerSelection == `<i id="scissor" class="fa-regular fa-hand-scissors"></i>`) {
    if (botSelection == `<i id="rock" class="fa-regular fa-hand-back-fist"></i>`) {
      return `You lose! scissor lost to rock! `;
    } else {
      return "You won! scissor beats paper!";
    }
  } else if (playerSelection == `<i id="paper" class="fa-regular fa-hand"></i>`) {
    if (botSelection == `<i id="scissor" class="fa-regular fa-hand-scissors"></i>`) {
      return "You lose! paper lost to scissor!";
    } else {
      return "You won! paper beats rock!";
    }
  } else if (playerSelection === null) {
    return "cancelled!";
  } else {
    return "Tie";
  }
};
console.log((Object.keys(ui).find(key => ui[key] === `<i id="rock" class="fa-regular fa-hand-back-fist"></i>`)))
const checkResult = () => {
  if(Object.keys(ui).find(key => ui[key] === `<i id="paper" class="fa-regular fa-hand"></i>`)){
    return "rock"
  } else if(Object.keys(ui).find(key => ui[key] === `<i id="rock" class="fa-regular fa-hand-back-fist"></i>`)){
    return "paper"
  } else {
    return "scissor"
  }
}
const game = () => {
  // Setting Initial Value for the Points
  let playerScore = 0;
  let computerScore = 0;

  // The main function where we loop through the game 5 times
  for (let i = 0; i < 5; i++) {
    console.log(`Round number ${i + 1}`);
    // Because my playRound() function return a sentence, I
    // use the split and include function to look for the word
    // "win!" or "lose!" to determine the result
    const result = playRound().split(" ");
    if (result.includes("won!")) {
      playerScore++;
      console.log("You won");
    } else if (result.includes("lose!")) {
      computerScore++;
      console.log("You lost");
    } else if (result.includes("cancelled!")) {
      break;  //The loops will stop if we detect that the player has cancelled the game midway
    } else {
      console.log("Tie");
    }
  }
  // This is to show the final score of the player and the computer
  console.log("player:" + playerScore);
  console.log("bot:" + computerScore);

  // The final result of who won or lose
  if (computerScore == playerScore) {
    return "Its a Tie!";
  } else if (computerScore > playerScore) {
    return "You have lost!";
  }
  return "You have won!";
};

