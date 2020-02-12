const startGame = () => {
    let playerName = getInputValue("playerName");
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
};
const logPlayer = (name = "MultiMath Player") => {
    console.log(`New game starting for player: ${name}`);
};
const getInputValue = (elementId) => {
    const inputElement = (document.getElementById(elementId));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
const postScore = (score, playerName = "MultiMath Player") => {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById("scores");
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
};
document.getElementById("startGame").addEventListener("click", startGame);
const logMessage = (message) => console.log(message);
const logError = (err) => {
    console.error(err);
};
const firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map