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

function game() {
  let canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
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

  let car = new UserCar(
    100,
    window.innerHeight - 200,
    250,
    250,
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

  let lanes = [
    canvas.width / 4 - 150,
    canvas.width / 2 - 150,
    (3 * canvas.width) / 4 - 50,
  ];
  let laneOccupied = [false, false, false];
  let enemy: EnemyCar[] = [];
  function spawnEnemyCar() {
    let availableLanes = lanes.filter((_, index) => !laneOccupied[index]);
    if (availableLanes.length > 0) {
      let randomLane = Math.floor(Math.random() * availableLanes.length);
      let laneIndex = lanes.indexOf(availableLanes[randomLane]);
      let timediff = (Date.now() - starttime) / 1000;
      let speed = timediff * 0.05 + 1;
      let randomX = Math.random() * 50;

      let enemyCar = new EnemyCar(
        lanes[laneIndex],
        0,
        300,
        300,
        speed,
        carlist[Math.floor(Math.random() * carlist.length)],
        ctx
      );

      laneOccupied[laneIndex] = true;

      enemy.push(enemyCar);
    }
  }

  setInterval(spawnEnemyCar, 2000);

  enemy.forEach((car) => {
    car.draw();
  });

  function restartGame() {
    document.body.removeChild(GameoverText);
    console.log("function called");

    gameOver = false;
    score = 0;
    starttime = Date.now();
    rectangle = [];
    x_offset = 0;
    y_offset = 0;
    laneOccupied = [false, false, false];
    enemy = [];

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

    update();
  }

  restartButton.addEventListener("click", () => {
    restartGame();
    restartButton.style.display = "none";
  });

  car.draw();
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
          if (checkCollision(ecar, car, 43000)) {
            gameOver = true;
          }
        }
      });
      car.update(0, 0);
    } else {
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
      // Game Over

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

startButton.addEventListener("click", () => {
  console.log("on click");
  document.body.removeChild(gameContainer);

  game();
});
