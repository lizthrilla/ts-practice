const startGame = () => {

    const playerName: string = 'Liz'
    logPlayer(playerName)

    const messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath!  Starting new game...'
    
}

const logPlayer = (name:string) => {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)