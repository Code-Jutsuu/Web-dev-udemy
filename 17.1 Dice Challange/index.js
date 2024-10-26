function game() {
    // Generate random numbers for each player
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;

    // Set the images for the dice based on the random numbers
    var images1 = "./images/dice" + p1 + ".png";
    var images2 = "./images/dice" + p2 + ".png";

    document.querySelector(".img1").setAttribute("src", images1);
    document.querySelector(".img2").setAttribute("src", images2);

    // Determine the result and display it
    if (p1 === p2) {
        document.getElementById("result").textContent = "Draw";
    } else if (p1 > p2) {
        document.getElementById("result").textContent = "🚩 Player 1 wins";
    } else {
        document.getElementById("result").textContent = "Player 2 wins 🚩";
    }
}

// Call the game function on page load
game();
