import { Points } from "./rectangle";
import { Rectangle, Point } from "./Interface.ts";
console.log("object");
export class Points implements Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
export class Rectangles {
  position: Point;
  width: number;
  height: number;

  constructor(position: Point, width: number, height: number) {
    this.position = position;
    this.width = width;
    this.height = height;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    if (this.position.y > window.innerHeight) {
      this.position.y = 0;
    } else {
      this.position.y += 2;
    }
  }
}
