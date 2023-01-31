const maxRandomNumber = 100;

const gameEven = (numberOfGames) => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const games = [];
  const gameContents = [rules, games];

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1;
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const question = randomNumber;
    games.push([question, rightAnswer]);
  }

  return gameContents;
};

export default gameEven;
