var startGame = function () {
    var playerName = getInputValue("playerName");
    logPlayer(playerName);
    // let messagesElement = document.getElementById('messages');
    // messagesElement!.innerText = 'Welcome to MultiMath!  Starting new game...'
    postScore(100, playerName);
    postScore(-5, playerName);
};
// passing in a default parameter ( name = 'MultiMath Player') makes the parameter optional
// void is for when you don't return anything
var logPlayer = function (name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: " + name);
};
var getInputValue = function (elementId) {
    var inputElement = (document.getElementById(elementId));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
var postScore = function (score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById("scores");
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
};
document.getElementById("startGame").addEventListener("click", startGame);
var logMessage = function (message) { return console.log(message); };
var logError = function (err) {
    console.error(err);
};
var myResult = {
    playerName: "Marie",
    score: 5,
    problemCount: 5,
    factor: 7
};
var player = {
    name: 'Daniel',
    formatName: function () { return 'Dan'; }
};
