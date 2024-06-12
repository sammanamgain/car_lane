export class Car {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  ctx: CanvasRenderingContext2D;
  speed: number;
  imageLoaded: boolean = false;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    imageSrc: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
      this.draw();
    };
    this.image.onerror = () => {
      console.error(`Failed to load image at ${imageSrc}`);
    };
    this.image.src = imageSrc;
    this.ctx = ctx as CanvasRenderingContext2D;
    this.speed = speed;
  }

  // Draw the Car
  draw() {
    if (this.imageLoaded) {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  // Update the Car position
  update(dx: number, dy: number) {
    dx *= this.speed;
    dy *= this.speed;
    this.x += dx;
    this.y += dy;
    this.draw();
  }

  
}
