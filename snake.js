class Snake {
  constructor(size) {
    this.x = 0;
    this.y = 0;
    this.size = size;
    // Moves right to start off with
    this.xVelocity;
    this.yVelocity;
    this.currentDir;
    this.right();
    this.hitBoundary;
    this.color = "green";
    this.length = 0;
    this.body = [];
  }
  draw() {
    context.fillStyle = this.color;
    for (let i = 0; i < this.body.length; i++) {
      context.fillRect(this.body[i].x, this.body[i].y, this.size, this.size);
    }

    // Draw the head
    context.fillRect(this.x, this.y, this.size, this.size);
  }
  travel() {
    // Take the previous position in the body
    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }

    // Set the last entry to the x and y position i.e.
    this.body[this.length - 1] = { x: this.x, y: this.y };

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }
  changeDirection(direction) {
    switch (direction) {
      case "ArrowUp":
        if (this.currentDir == "down" && this.length > 0) {
          break;
        }
        this.up();
        break;
      case "ArrowLeft":
        if (this.currentDir == "right" && this.length > 0) {
          break;
        }
        this.left();
        break;
      case "ArrowRight":
        if (this.currentDir == "left" && this.length > 0) {
          break;
        }
        this.right();
        break;
      case "ArrowDown":
        if (this.currentDir == "up" && this.length > 0) {
          break;
        }
        this.down();
        break;
    }
  }
  isEating(food) {
    if (this.x == food.x && this.y == food.y) {
      this.length++;
      return true;
    }
    return false;
  }
  left() {
    this.xVelocity = -this.size;
    this.yVelocity = 0;
    this.currentDir = "left";
  }
  up() {
    this.xVelocity = 0;
    this.yVelocity = -this.size;
    this.currentDir = "up";
  }
  right() {
    this.xVelocity = this.size;
    this.yVelocity = 0;
    this.currentDir = "right";
  }
  down() {
    this.xVelocity = 0;
    this.yVelocity = this.size;
    this.currentDir = "down";
  }
  lost() {
    if (this.hitBoundary() || this.hitSelf()) {
      return true;
    }
    return false;
  }
  hitSelf() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.x == this.body[i].x && this.y == this.body[i].y) {
        return true;
      }
    }
    return false;
  }
  hitBoundary() {
    if (
      this.x > canvas.width ||
      this.x < 0 ||
      this.y > canvas.height ||
      this.y < 0
    ) {
      return true;
    }
    return false;
  }
}
