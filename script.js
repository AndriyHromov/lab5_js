const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");

let score = 0;
let gameActive = false;
let timer = null;

// ▶️ СТАРТ ГРИ
startBtn.onclick = function () {
    clearTimeout(timer);

    score = 0;
    gameActive = true;

    startBtn.disabled = true;

    document.getElementById("score").textContent = score;
    document.getElementById("status").textContent = "Гра почалась";

    spawnBox();
};

// 🔲 СПАВН КВАДРАТА
function spawnBox() {
    if (!gameActive) return;

    const gameArea = document.getElementById("gameArea");
    const boxSize = 50;

    const maxX = gameArea.clientWidth - boxSize;
    const maxY = gameArea.clientHeight - boxSize;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    box.style.left = x + "px";
    box.style.top = y + "px";

    const color = document.getElementById("colorPicker").value;
    box.style.backgroundColor = color;

    box.style.display = "block";

    const time = parseInt(document.getElementById("difficulty").value);

    clearTimeout(timer);

    timer = setTimeout(() => {
        if (gameActive) {
            endGame();
        }
    }, time);
}

// 👆 КЛІК
box.onclick = function () {
    if (!gameActive) return;

    clearTimeout(timer);

    score++;
    document.getElementById("score").textContent = score;

    box.style.display = "none";

    spawnBox();
};

// ❌ КІНЕЦЬ ГРИ
function endGame() {
    gameActive = false;
    clearTimeout(timer);

    box.style.display = "none";
    startBtn.disabled = false;

    document.getElementById("status").textContent =
        "Ти програв! Очки: " + score;

    // 🔥 Popup замість alert
    document.getElementById("finalScore").textContent =
        "Твої очки: " + score;

    document.getElementById("gameOverModal").style.display = "flex";
}

// ❌ Закриття popup
function closeModal() {
    document.getElementById("gameOverModal").style.display = "none";
}
