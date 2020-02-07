"use strict";
const startGame = () => {
    console.log('check');
    const messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath!  Starting new game...';
};
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map