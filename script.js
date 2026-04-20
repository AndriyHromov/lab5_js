const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

let score = 0;
let gameActive = false;
let timer = null;
let interval = null;
let timeLeft = 0;

startBtn.onclick = function () {
    clearTimeout(timer);
    clearInterval(interval);

    score = 0;
    gameActive = true;

    startBtn.disabled = true;

    document.getElementById("score").textContent = score;
    document.getElementById("status").textContent = "Гра почалась";

    spawnBox();
};

function spawnBox() {
    if (!gameActive) return;

    const size = 50;

    const maxX = gameArea.clientWidth - size;
    const maxY = gameArea.clientHeight - size;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    box.style.left = x + "px";
    box.style.top = y + "px";

    box.style.backgroundColor =
        document.getElementById("colorPicker").value;

    box.style.display = "block";

    const time = parseInt(document.getElementById("difficulty").value);

    clearTimeout(timer);
    clearInterval(interval);

    timeLeft = time / 1000;
    document.getElementById("timeLeft").textContent = timeLeft.toFixed(1);

    interval = setInterval(() => {
        timeLeft -= 0.1;
        document.getElementById("timeLeft").textContent = timeLeft.toFixed(1);

        if (timeLeft <= 0) {
            clearInterval(interval);
        }
    }, 100);

    timer = setTimeout(() => {
        if (gameActive) endGame();
    }, time);
}

box.onclick = function () {
    if (!gameActive) return;

    clearTimeout(timer);
    clearInterval(interval);

    score++;
    document.getElementById("score").textContent = score;

    box.style.display = "none";

    spawnBox();
};

function endGame() {
    gameActive = false;
    clearTimeout(timer);
    clearInterval(interval);

    box.style.display = "none";
    startBtn.disabled = false;

    document.getElementById("status").textContent =
        "Ти програв! Очки: " + score;

    setTimeout(() => {
        alert("Game Over! Твої очки: " + score);
    }, 100);
}
