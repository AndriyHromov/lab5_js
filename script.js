let box = document.getElementById("box");
let score = 0;
let gameActive = false;
let timer;

function startGame() {
    score = 0;
    gameActive = true;
    document.getElementById("score").textContent = score;
    document.getElementById("status").textContent = "Гра почалась!";
    spawnBox();
}

function spawnBox() {
    if (!gameActive) return;

    let gameArea = document.getElementById("gameArea");

    let maxX = gameArea.clientWidth - 50;
    let maxY = gameArea.clientHeight - 50;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    box.style.left = x + "px";
    box.style.top = y + "px";
    box.style.display = "block";

    let time = document.getElementById("difficulty").value;

    timer = setTimeout(() => {
        endGame();
    }, time);
}

box.onclick = function () {
    if (!gameActive) return;

    clearTimeout(timer);
    score++;
    document.getElementById("score").textContent = score;

    box.style.display = "none";

    spawnBox();
};

function endGame() {
    gameActive = false;
    box.style.display = "none";
    document.getElementById("status").textContent =
        "Ти програв! Очки: " + score;
}
