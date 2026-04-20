const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");

let score = 0;
let gameActive = false;
let timer = null;

// ▶️ старт гри
startBtn.onclick = function () {
    score = 0;
    gameActive = true;

    document.getElementById("score").textContent = score;
    document.getElementById("status").textContent = "Гра почалась";

    spawnBox();
};

// 🔲 поява квадрата
function spawnBox() {
    if (!gameActive) return;

    const gameArea = document.getElementById("gameArea");

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    box.style.left = x + "px";
    box.style.top = y + "px";

    // 🎨 колір
    const color = document.getElementById("colorPicker").value;
    box.style.backgroundColor = color;

    box.style.display = "block";

    // ⏱️ час
    const time = parseInt(document.getElementById("difficulty").value);

    // ❗ ВАЖЛИВО: очищаємо старий таймер
    clearTimeout(timer);

    timer = setTimeout(() => {
        if (gameActive) {
            endGame();
        }
    }, time);
}

// 👆 клік по квадрату
box.onclick = function () {
    if (!gameActive) return;

    score++;
    document.getElementById("score").textContent = score;

    box.style.display = "none";

    // ❗ ВАЖЛИВО: зупиняємо таймер
    clearTimeout(timer);

    spawnBox();
};

// ❌ кінець гри
function endGame() {
    gameActive = false;
    box.style.display = "none";

    document.getElementById("status").textContent =
        "Ти програв! Очки: " + score;
}
