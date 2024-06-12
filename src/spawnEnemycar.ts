import { EnemyCar } from "./class/Enemycar";
export function spawnEnemyCar(
  lanes: [],
  laneOccupied: [],
  starttime: number,
  carlist: [],
  ctx: CanvasRenderingContext2D,
  enemy:[]
) {
  let availableLanes = lanes.filter((_, index) => !laneOccupied[index]);
  if (availableLanes.length > 0) {
    let randomLane = Math.floor(Math.random() * availableLanes.length);
    let laneIndex = lanes.indexOf(availableLanes[randomLane]);
    let timediff = (Date.now() - starttime) / 1000;
    let speed = timediff * 0.05 + 1;
    let enemyCar = new EnemyCar(
      lanes[laneIndex],
      0,
      200,
      200,
      speed,
      carlist[Math.floor(Math.random() * carlist.length)],
      ctx
    );

    laneOccupied[laneIndex] = true;

    enemy.push(enemyCar);
  }
}
