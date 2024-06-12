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

  // Override the update method
  update(dx: number, dy: number) {
    dx *= this.speed;
    dy *= this.speed;
    this.x += dx;
    this.y += dy;

    // Call the draw method from the parent Car class
    this.draw();
  }

  addEventListener() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "d") {
        this.x += 10;
        // Your code here
      }
      if (event.key === "a") {
        this.x -= 10;
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
