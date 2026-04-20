const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");

let score = 0;
let gameActive = false;
let timer = null;


startBtn.onclick = function () {
    score = 0;
    gameActive = true;

    document.getElementById("score").textContent = score;
    document.getElementById("status").textContent = "Гра почалась";

    spawnBox();
};


function spawnBox() {
    if (!gameActive) return;

    const gameArea = document.getElementById("gameArea");

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

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


box.onclick = function () {
    if (!gameActive) return;

    score++;
    document.getElementById("score").textContent = score;

    box.style.display = "none";

    
    clearTimeout(timer);

    spawnBox();
};

function endGame() {
    gameActive = false;
    box.style.display = "none";

    
    alert("Game Over! Твої очки: " + score);

    document.getElementById("status").textContent =
        "Ти програв! Очки: " + score;
}
