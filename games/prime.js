const maxRandomNumber = 100;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = (numberOfGames) => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const games = [];
  const gameContents = [rules, games];

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1;
    const question = randomNumber;
    const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    games.push([question, rightAnswer]);
  }

  return gameContents;
};

export default gamePrime;
