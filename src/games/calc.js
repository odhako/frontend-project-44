const gameCalc = (numberOfGames, maxRandomNumber) => {
  const rules = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  const games = [];
  const gameContents = [rules, games];

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const randomNumber = () => Math.floor(Math.random() * maxRandomNumber);
    const number1 = randomNumber();
    const number2 = randomNumber();
    const question = `${number1} ${randomOperation} ${number2}`;

    switch (randomOperation) {
      case '+':
        games.push([question, (number1 + number2).toString()]);
        break;
      case '-':
        games.push([question, (number1 - number2).toString()]);
        break;
      case '*':
        games.push([question, (number1 * number2).toString()]);
        break;
      default:
        break;
    }
  }

  return gameContents;
};

export default gameCalc;
