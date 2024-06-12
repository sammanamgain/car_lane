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


  update() {
    let dy = 1;

    dy *= this.speed;

    this.y += dy;

 
    this.draw();
  }
}
