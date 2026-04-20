function showText() {
    let input = document.getElementById("userInput").value;

    if (input === "") {
        document.getElementById("output").textContent = "Ви нічого не ввели!";
    } else {
        document.getElementById("output").textContent = "Ви ввели: " + input;
    }
}
