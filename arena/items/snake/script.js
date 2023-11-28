// JavaScript for Snake game

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let d = "RIGHT";
let score = 0;

function drawSnake() {
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "green" : "lightgreen";
    ctx.fillRect(segment.x, segment.y, box, box);
    ctx.strokeStyle = "darkgreen";
    ctx.strokeRect(segment.x, segment.y, box, box);
  });
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
  ctx.strokeStyle = "darkred";
  ctx.strokeRect(food.x, food.y, box, box);
}

function moveSnake() {
  let head = { x: snake[0].x, y: snake[0].y };

  if (d === "LEFT") head.x -= box;
  if (d === "UP") head.y -= box;
  if (d === "RIGHT") head.x += box;
  if (d === "DOWN") head.y += box;

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
  } else {
    snake.pop();
  }
}

function checkCollision() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
  return snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Ubuntu Mono";
  ctx.fillText("Score: " + score, 10, 30);
}

function gameLoop() {
  if (checkCollision()) {
    clearInterval(game);
    alert("Game Over! Your score is " + score);
    location.reload();
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  moveSnake();
  drawScore();
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37 && d !== "RIGHT") d = "LEFT";
  if (event.keyCode === 38 && d !== "DOWN") d = "UP";
  if (event.keyCode === 39 && d !== "LEFT") d = "RIGHT";
  if (event.keyCode === 40 && d !== "UP") d = "DOWN";
});

let game = setInterval(gameLoop, 100);
