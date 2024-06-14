import "./style.css";
import { Rectangles, Points } from "./class/rectangle.ts";
import { Car } from "./class/car";
import { UserCar } from "./class/usercar";
import { EnemyCar } from "./class/Enemycar";
import { createGameElements } from "./createDom/dom";
const {
  scoreDisplay,
  restartButton,
  Highscore,
  GameoverText,
  gameContainer,
  startButton,
} = createGameElements();

import { distance, checkCollision } from "./collision_detection/collision";

let startGame = true;
let enemySpawnInterval;

function game() {
  let canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  // at start screen, i donot want to load canvas here, after user click , start game, then only load canvas
  canvas.style.display = "block";
  canvas.style.overflow = "hidden";
  canvas.style.backgroundColor = "black";
  document.body.style.position = "relative";
  let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
  let gameOver = false;
  canvas.width = window.innerWidth / 1.75;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let x_offset: Number = 0;
  let y_offset: Number = 0;
  let score = 0;
  let rectangle: Rectangles[] = [];
  let starttime = Date.now();
  let HighestScore = false;
  let speed = 1;
  // draw the rectangles tiles on the  road
  for (let i = 0; i < 2; i++) {
    y_offset = 0;

    for (let j = 0; j < 7; j++) {
      const rect = new Rectangles(
        new Points(320 + x_offset, 100 + y_offset),
        20,
        50
      );
      rect.draw(ctx);
      rectangle.push(rect);

      y_offset += 150;
    }
    x_offset += 400;
  }

  // create a player car
  let car = new UserCar(
    100,
    window.innerHeight - 400,
    90,
    230,
    1,
    "Car.png",
    ctx
  );
  let carlist = [
    "Mini_van.png",
    "Mini_truck.png",
    "Police.png",
    "truck.png",
    "taxi.png",
  ];

  // defining the lanes
  let lanes = [
    canvas.width / 4 - 150,
    canvas.width / 2 - 150,
    (3 * canvas.width) / 4 - 50,
  ];
  let laneOccupied = [false, false, false];
  let enemy: EnemyCar[] = [];
  function spawnEnemyCar() {
    // checking if there any free lane
    let availableLanes = lanes.filter((_, index) => !laneOccupied[index]);
    if (availableLanes.length > 0) {
      let randomLane = Math.floor(Math.random() * availableLanes.length);
      let laneIndex = lanes.indexOf(availableLanes[randomLane]);
      let timediff = (Date.now() - starttime) / 1000;

      let randomX = Math.random() * 50;

      let enemyCar = new EnemyCar(
        lanes[laneIndex],
        0,
        90,
        230,
        speed,
        carlist[Math.floor(Math.random() * carlist.length)],
        ctx
      );

      laneOccupied[laneIndex] = true;

      enemy.push(enemyCar);
    }
  }

  enemySpawnInterval = setInterval(spawnEnemyCar, 2000);

  enemy.forEach((car) => {
    car.draw();
  });

  // to reset game after game finish and player clicks to to restart game, this will invoke
  function restartGame() {
    Highscore.innerText = "";
    document.body.removeChild(GameoverText);
    clearInterval(enemySpawnInterval);
    gameOver = false;
    score = 0;
    starttime = Date.now();
    rectangle = [];
    x_offset = 0;
    y_offset = 0;
    laneOccupied = [false, false, false];
    enemy = [];
    speed = 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    car.x = 100;
    car.y = window.innerHeight - 200;

    for (let i = 0; i < 2; i++) {
      y_offset = 0;

      for (let j = 0; j < 7; j++) {
        const rect = new Rectangles(
          new Points(400 + x_offset, 100 + y_offset),
          20,
          50
        );
        rect.draw(ctx);
        rectangle.push(rect);

        y_offset += 150;
      }
      x_offset += 500;
    }
    enemySpawnInterval = setInterval(spawnEnemyCar, 2000);
    update();
  }

  restartButton.addEventListener("click", () => {
    restartGame();
    restartButton.style.display = "none";
  });

  car.draw();
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scoreDisplay.style.display = "block";
    scoreDisplay.innerText = "Score: " + score;

    if (!gameOver) {
      rectangle.forEach((rect) => {
        rect.update();
        rect.draw(ctx);
      });
      enemy.forEach((ecar, index) => {
        ecar.update();
        if (ecar.y > canvas.height) {
          laneOccupied[lanes.indexOf(ecar.x)] = false;
          enemy.splice(index, 1);
          score++;
        } else {
          if (checkCollision(ecar, car, 10)) {
            gameOver = true;
          }
        }
      });
      car.update(0, 0);
    } else {
      // after game over is true
      scoreDisplay.style.display = "none";
      document.body.appendChild(GameoverText);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let highscore = localStorage.getItem("score");
      if (score > highscore) {
        localStorage.setItem("score", score);
        Highscore.innerText = `You got High score`;
        HighestScore = true;
      }
      HighestScore && document.body.appendChild(Highscore);

      ctx.font = "32px Arial";
      ctx.fillStyle = "red";
      ctx.fillText(
        `Your Score: ${score.toFixed(0)}`,
        canvas.width / 2 - 130,
        canvas.height / 2 + 50 - 80
      );
      restartButton.style.display = "block";
    }
    requestAnimationFrame(update);
  }
  update();
}
// removing the start screen after clicking on start button
startButton.addEventListener("click", () => {
  document.body.removeChild(gameContainer);
  game();
});
