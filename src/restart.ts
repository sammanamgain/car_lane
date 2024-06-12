export function restartGame() {
    // Reset game state variables
    gameOver = false;
    score = 0;
    starttime = Date.now();
    rectangle = [];
    x_offset = 0;
    y_offset = 0;
    laneOccupied = [false, false, false];
    enemy = [];
  
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Reset the car positions
    car.x = 100;
    car.y = window.innerHeight - 200;
  
    // Re-create the rectangles
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
  
    // Start the game loop
    update();
  }