export function createGameElements() {
  const scoreDisplay = document.createElement("div");
  scoreDisplay.id = "scoreDisplay";
  scoreDisplay.style.fontSize = "24px";
  scoreDisplay.style.position = "absolute";
  scoreDisplay.style.color = "red";
  scoreDisplay.style.top = "10%";
  scoreDisplay.style.right = "20%";
  document.body.appendChild(scoreDisplay);

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Game";
  restartButton.style.position = "absolute";
  restartButton.style.left = "50%";
  restartButton.style.top = "60%";
  restartButton.style.transform = "translate(-50%, -50%)";
  restartButton.style.display = "none";
  restartButton.style.padding = "10px 10px";
  document.body.appendChild(restartButton);

  const Highscore = document.createElement("p");
  Highscore.textContent = "Highest Score";
  Highscore.style.position = "absolute";
  Highscore.style.left = "50%";
  Highscore.style.top = "30%";
  Highscore.style.fontSize = "32px";
  Highscore.style.color = "green";
  Highscore.style.padding = "10px 10px";

  const GameoverText = document.createElement("h1");
  GameoverText.style.fontFamily = "monospace";
  GameoverText.innerText = "Game Over";
  GameoverText.style.fontSize = "102px";
  GameoverText.style.textShadow =
    " 1px 0 0 black,-1px 0 0 black,0 1px 0 black,0 -1px 0 black";
  GameoverText.style.color = "Yellow";
  GameoverText.style.position = "absolute";
  GameoverText.style.top = "20%";


const canvas=document.getElementById("canvas");
canvas.style.display="none"
  const gameContainer = document.createElement("div");
  gameContainer.id = "game-container";
  document.body.appendChild(gameContainer);

  // Create game title element
  const gameTitle = document.createElement("div");
  gameTitle.id = "game-title";
  gameTitle.textContent = "Car Lane Game";
  gameContainer.appendChild(gameTitle);

  // Create start button element
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.textContent = "Start Game";
  gameContainer.appendChild(startButton);

  
  document.body.style.height = "100%";
  document.body.style.margin = "0";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.backgroundColor = "#282c34";
  document.body.style.color = "white";
  document.body.style.fontFamily = "'Arial', sans-serif";

  gameContainer.style.display = "flex";
  gameContainer.style.flexDirection = "column";
  gameContainer.style.alignItems = "center";

  gameTitle.style.fontSize = "3em";
  gameTitle.style.marginBottom = "20px";

  startButton.style.padding = "10px 20px";
  startButton.style.fontSize = "1.5em";
  startButton.style.backgroundColor = "#61dafb";
  startButton.style.border = "none";
  startButton.style.cursor = "pointer";
  startButton.style.borderRadius = "5px";
  startButton.style.transition = "background 0.3s";

  startButton.addEventListener("mouseenter", function () {
    startButton.style.backgroundColor = "#21a1f1";
  });

  startButton.addEventListener("mouseleave", function () {
    startButton.style.backgroundColor = "#61dafb";
  });

  return {
    scoreDisplay,
    restartButton,
    Highscore,
    GameoverText,
    gameContainer,
    startButton
  };
}
