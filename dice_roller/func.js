const button = document.getElementById("button");

button.onclick = () => {
    const diceNumber = document.getElementById("numberOfDice");
    const resultDiv = document.getElementById("diceResults");
    const imgDiv = document.getElementById("diceImages")
    const dices = [];
    const img = [];
    
    const value = diceNumber.value;
    if (value <= 0) {
        resultDiv.textContent = "Number of Dice should be > 0.";
    } else {
        for (let i = 0; i < value; i++) {
            const diceResult = Math.floor(Math.random() * 6) + 1;
            dices.push(diceResult);

            img.push(`<img src="img/${diceResult}.png" alt="Dice value ${diceResult}">`);
        }

        resultDiv.innerHTML = `Dice Values: ${dices.join(", ")}`;
        imgDiv.innerHTML = img.join('');
    }
}