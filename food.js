class Food {
    constructor(){
        this.x;
        this.y;
        this.color = "red";
        this.setToRandomLocation();
    }
    setToRandomLocation(){
        // Improve; would be better to just know what
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * snakeSize;
        this.y = (Math.floor(Math.random() * cols - 1) + 1) * snakeSize;
        for (let i = 0; i < snake.body.length; i++) {
            if(snake.body[i].x == this.x && snake.body[i].y == this.y)
            this.setToRandomLocation();
        }
    }
    draw() {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, snakeSize, snakeSize);
    }
}