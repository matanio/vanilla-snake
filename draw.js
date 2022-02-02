// Constants
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const snakeSize = 20;
const rows = canvas.height / snakeSize;
const cols = canvas.width / snakeSize;
const speed = 100; 

let highScore = 0;
let score = 1;

function loop() {
    // RESET
    document.getElementById('game-info').hidden = true;
    document.getElementById('score').innerHTML = `SCORE: 1`
    document.getElementById('game-over').innerHTML = '';
    snake = new Snake(snakeSize);
    food = new Food();

    // Frame update
    let intervalId = window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw();
        snake.travel();
        snake.draw();

        // Increment Score when we get longer
        if(snake.isEating(food)){
            food = new Food();
            score = snake.length + 1;
            document.getElementById('score').innerHTML = `SCORE: ${score}`
        } 

        // If we lose, stop the game
        if(snake.lost()){
            window.clearInterval(intervalId);
            gameOver();
        };
    }, speed);
}

// Arrow-Key Functionlity
window.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    const direction = evt.key;
    snake.changeDirection(direction);
})

function gameOver() {
    if(score > highScore) {
        highScore = score;
    }
    // Update HTML
    document.getElementById('highscore').innerHTML = `HIGHSCORE: ${highScore}`
    document.getElementById('game-over').innerHTML = 'GAME OVER';
    document.getElementById('play').innerHTML = 'PLAY AGAIN';
    document.getElementById('game-info').hidden = false;

}