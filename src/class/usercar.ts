import { EnemyCar } from "./Enemycar";
import { Car } from "./car";

export class UserCar extends Car {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    imageSrc: string,
    ctx: CanvasRenderingContext2D
  ) {
    super(x, y, width, height, speed, imageSrc, ctx);
    this.addEventListener();
  }

  update(dx: number, dy: number) {
    dx *= this.speed;
    dy *= this.speed;
    this.x += dx;
    this.y += dy;

    this.draw();
  }

  addEventListener() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "d") {
        for (let i = 0; i < 10; i++) {
          this.update(10, 0);
        }
      }
      if (event.key === "a") {
        this.x -= 100;
      }
      if (event.key === "w") {
        this.y -= 5;
      }
      if (event.key === "s") {
        this.y += 5;
      }
    });
  }
}
