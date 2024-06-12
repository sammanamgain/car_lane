export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
export function checkCollision(
  car1: Car,
  car2: Car,
  minOverlap: number
): boolean {
  const rectA = {
    x: car1.x,
    y: car1.y,
    width: car1.width,
    height: car1.height,
  };

  const rectB = {
    x: car2.x,
    y: car2.y,
    width: car2.width,
    height: car2.height,
  };
  //overlap  x-axis
  const dx = Math.max(
    0,
    Math.min(rectA.x + rectA.width, rectB.x + rectB.width) -
      Math.max(rectA.x, rectB.x)
  );

  // overlap y axis
  const dy = Math.max(
    0,
    Math.min(rectA.y + rectA.height, rectB.y + rectB.height) -
      Math.max(rectA.y, rectB.y)
  );

  const overlap = dx * dy;

  return overlap >= minOverlap;
}
