const startGame = () => {
  let playerName: string | undefined = getInputValue("playerName");
  logPlayer(playerName);

  // let messagesElement = document.getElementById('messages');
  // messagesElement!.innerText = 'Welcome to MultiMath!  Starting new game...'

  postScore(100, playerName);
  postScore(-5, playerName)
};

// passing in a default parameter ( name = 'MultiMath Player') makes the parameter optional
// void is for when you don't return anything
const logPlayer = (name: string = "MultiMath Player"): void => {
  console.log(`New game starting for player: ${name}`);
};

const getInputValue = (elementId: string): string | undefined => {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementId)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
};

const postScore = (
  score: number,
  playerName: string = "MultiMath Player"
): void => {
  let logger: (value: string) => void;
  if (score < 0) {
      logger = logError
  } else {
      logger = logMessage
  }

  const scoreElement: HTMLElement | null = document.getElementById("scores");
  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`)
};

document.getElementById("startGame")!.addEventListener("click", startGame);

const logMessage = (message:string) => console.log(message);

const logError = (err: string): void => {
    console.error(err)
}
