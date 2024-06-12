import { Car } from "./car";
export class EnemyCar extends Car {
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
  }

  // Override the update method
  update() {
    let dy = 0.75;

    dy *= this.speed;

    this.y += dy;

    // Call the draw method from the parent Car class
    this.draw();
  }
}
