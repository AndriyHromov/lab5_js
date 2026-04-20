let box = document.getElementById("box");
let score = 0;

function spawnBox() {
    let gameArea = document.getElementById("gameArea");

    let maxX = gameArea.clientWidth - 50;
    let maxY = gameArea.clientHeight - 50;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    box.style.left = x + "px";
    box.style.top = y + "px";

    let color = document.getElementById("colorPicker").value;
    box.style.backgroundColor = color;

    box.style.display = "block";

    let time = document.getElementById("difficulty").value;

    setTimeout(() => {
        box.style.display = "none";
        spawnBox();
    }, time);
}

box.onclick = function () {
    score++;
    document.getElementById("score").textContent = score;
    box.style.display = "none";
    spawnBox();
};

spawnBox();
