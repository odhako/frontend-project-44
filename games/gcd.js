const maxRandomNumber = 100;

const calcGcd = (number1, number2) => {
  let gcd = 1;
  let i = 1;
  while (i <= number1 || i <= number2) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
    i += 1;
  }

  return gcd;
};

const gameGcd = (numberOfGames) => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const games = [];
  const gameContents = [rules, games];

  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = () => Math.floor(Math.random() * maxRandomNumber);
    const number1 = randomNumber();
    const number2 = randomNumber();
    const question = `${number1} ${number2}`;
    const rightAnswer = calcGcd(number1, number2).toString();

    games.push([question, rightAnswer]);
  }

  return gameContents;
};

export default gameGcd;
